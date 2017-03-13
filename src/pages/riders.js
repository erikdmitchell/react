import React from 'react';
import RidersList from './views/riders-list';

class Riders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			riders: {},
			currentPage: 1,
		}
	}
	componentDidMount() {	
		fetch('http://uci.dev/wp-json/uci/v1/riders')
			.then(response => response.json())
			.then(json => {
				this.setState({
					riders: json
				})
			})
		.catch((error) => {
			console.error(error);
		});
	}
	render() {				
		return (
			<div>
				<RidersList riders={this.state.riders} />
			</div>
		)
	}
	handleClick(event) {
console.log(event.target);		
		this.setState({
			currentPage: Number(event.target.id)
		});
	}
}

export default Riders
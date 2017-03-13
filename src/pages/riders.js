import React from 'react';
import RidersList from './views/riders-list';

class Riders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			riders: {}
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
}

export default Riders
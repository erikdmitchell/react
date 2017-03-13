import React from 'react';
import RacesList from './views/races-list';

class races extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			races: {}
		}
	}
	componentDidMount() {	
		fetch('http://uci.dev/wp-json/uci/v1/races')
			.then(response => response.json())
			.then(json => {
				this.setState({
					races: json
				})
			})
		.catch((error) => {
			console.error(error);
		});
	}
	render() {				
		return (
			<div>
				<RacesList races={this.state.races} />
			</div>
		)
	}
}

export default races
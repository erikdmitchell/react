import React from 'react';
import RacesList from './views/races-list';

class Races extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			races: {},
			currentPage: 1,
		}
	}
	componentDidMount() {
console.log('componentDidMount');		
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
console.log(this.state);					
		return (
			<div>
				<RacesList races={this.state.races} />
				<a href="#" onClick={this.changePage.bind(this)} id="2">Next</a>
			</div>
		)
	}
	changePage(event) {	
		event.preventDefault();
		
		this.setState({
			currentPage: Number(event.target.id)
		});
	}
	componentWillUpdate(nextProps, nextState) {
console.log('componentWillUpdate');		
console.log(nextProps);
console.log(nextState);		
	}
}

export default Races
import React from 'react';
//import RacesList from './views/races-list';
import { } from 'react-bootstrap';

class Race extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			races: {},
		}
	}
	componentDidMount() {		
		//this.loadData(this.state);
	}
	render() {				
		return (
			<div>
				Race
			</div>
		)
	}
	loadData(state) {		
		let url='http://uci.dev/wp-json/uci/v1/races?page=' + state.activePage;
		let totalPosts=0;		

		fetch(url)
			.then(function (response) {
				totalPosts=response.headers.get('X-WP-Total');
				
				return response.json()				
			})
			.then(json => {
				this.setState({
					races: json,
					totalPosts: totalPosts
				})				
			})
		.catch((error) => {
			console.error(error);
		});
	}
}

export default Race
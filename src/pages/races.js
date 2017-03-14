import React from 'react';
import RacesList from './views/races-list';
import { Pagination } from 'react-bootstrap';

class Races extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			races: {},
			activePage: 1,
		}
	}
	componentDidMount() {
console.log('componentDidMount');		
		fetch('http://uci.dev/wp-json/wp/v2/races')
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
				
				<Pagination
			        prev
			        next
			        first
			        last
			        ellipsis
			        boundaryLinks
			        items={20}
			        maxButtons={5}
			        activePage={this.state.activePage}
			        onSelect={this.changePage.bind(this)} 
			    />

			</div>
		)
	}
	changePage(pageNum) {		
		this.setState({
			activePage: Number(pageNum)
		});	
	}
	componentWillUpdate(nextProps, nextState) {
console.log('componentWillUpdate');		
//console.log(nextProps);
console.log(nextState);		
	}
}

export default Races
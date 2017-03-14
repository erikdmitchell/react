import React from 'react';
import RidersList from './views/riders-list';
import { Grid, Pagination } from 'react-bootstrap';

class Riders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			riders: {},
			activePage: 1,
			perPage: 15,
			totalPosts: 0,
		}
	}
	componentDidMount() {		
		this.loadData(this.state);
	}
	render() {
		const items=Math.ceil(this.state.totalPosts / this.state.perPage);
		const maxButtons=6;
									
		return (
			<div>
				<RidersList riders={this.state.riders} />
				
				<Grid className="riders-pagination">
				<Pagination
			        prev
			        next
			        first
			        last
			        ellipsis={false}
			        boundaryLinks
			        items={items}
			        maxButtons={maxButtons}
			        activePage={this.state.activePage}
			        onSelect={this.changePage.bind(this)} 
			    />
			    </Grid>

			</div>
		)
	}
	changePage(pageNum) {		
		this.setState({
			activePage: Number(pageNum)
		});	
	}
	componentWillUpdate(nextProps, nextState) {
		if (nextState.activePage !== this.state.activePage) {
			this.loadData(nextState);
		}
	}
	loadData(state) {		
		let url='http://uci.dev/wp-json/wp/v2/riders?page=' + state.activePage;
		let totalPosts=0;		

		fetch(url)
			.then(function (response) {
				totalPosts=response.headers.get('X-WP-Total');
				
				return response.json()				
			})
			.then(json => {
				this.setState({
					riders: json,
					totalPosts: totalPosts
				})				
			})
		.catch((error) => {
			console.error(error);
		});		
	}
}

export default Riders
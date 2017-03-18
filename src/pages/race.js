import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Race extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			race: {},
		}
	}
	componentDidMount() {		
		this.loadData();
	}
	render() {	
		const race=this.state.race;
console.log(race);			
		return (
			<Grid className="race">
				<Row key={race.id} className="race-name">
				<Col xs={12}>
					{race.title.rendered}
				</Col>
			</Row>
			</Grid>
    	)
	}
	loadData() {	
		let url='http://uci.dev/wp-json/uci/v1/races/' + this.props.params.raceId;		

		fetch(url)
			.then(function (response) {
				return response.json()				
			})
			.then(json => {
				this.setState({
					race: json
				})				
			})
		.catch((error) => {
			console.error(error);
		});
	}
}

export default Race
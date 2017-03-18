import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class RacesList extends React.Component {	
	render() {			
		return (
			<Grid className="races-list">
				{Object.keys(this.props.races).map(function(key) {
					var race = this.props.races[key];

					return this.createListItem(race);
					
				}, this)}
			</Grid>
    	)
	}
	createListItem(race) {		
		return (
			<Row key={race.id} className="race">
				<Col xs={12}>
					<Link to={'/race/'+race.id}>{race.title.rendered}</Link>
				</Col>
			</Row>
		)
	}
}

export default RacesList
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
			<Row key={race.ID} className="race">
				<Col xs={12}>
					<a href="#">{race.post_title}</a>
				</Col>
			</Row>
		)
	}
}

export default RacesList
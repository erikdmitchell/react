import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class SingleRace extends React.Component {	
	render() {					
		return (
			<Grid className="races-list">
				<Row className="race-title">
					<Col xs={12}>
						<h2>{this.props.race.title.rendered}</h2>
					</Col>
				</Row>
			</Grid>
    	)
	}
}

export default SingleRace
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class RidersList extends React.Component {	
	render() {	
		return (
			<Grid className="riders-list">
				{Object.keys(this.props.riders).map(function(key) {
					var rider = this.props.riders[key];
					return this.createListItem(rider);
					
				}, this)}
			</Grid>
    	)
	}
	createListItem(rider) {		
		return (
			<Row key={rider.id} className="rider">
				<Col xs={12}>
					<a href="#">{rider.title.rendered}</a>
				</Col>
			</Row>
		)
	}
}

export default RidersList
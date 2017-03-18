import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class SingleRace extends React.Component {	
	render() {
		const race=this.props.race;
console.log(race);		
		return (
			<Grid className="race">
				<Row className="race-title">
					<Col xs={12}>
						<h2>{race.title.rendered}</h2>
					</Col>
				</Row>
				<Row className="race-details">
					<Col xs={6}>
						<span className="header">Date:</span> {race.race_date}
					</Col>
					<Col xs={6}>
						<span className="header">Class:</span> {race.race_class.rendered}
					</Col>
					<Col xs={6}>
						<span className="header">Country:</span> {race.country.rendered}
					</Col>					
					<Col xs={6}>
						<span className="header">Season:</span> {race.season.rendered}
					</Col>
					<Col xs={6}>
						<span className="header">Series:</span> {race.series.rendered}
					</Col>
				</Row>
					
				<div className="race-results">
					<Row>
						<Col xs={12}>
							<h3>Results</h3>
						</Col>
					</Row>
					
					<Row className="result header">
						<Col xs={1}>
							Place
						</Col>
						<Col xs={6}>
							Name
						</Col>
						<Col xs={1}>
							Nat.
						</Col>	
						<Col xs={1}>
							Points
						</Col>
						<Col xs={2}>
							Time
						</Col>								
					</Row>				
					
					{Object.keys(race.results).map(function(key) {
						var result = race.results[key];
	
						return this.resultsRow(result);
					
					}, this)}
				</div>
			</Grid>
    	)
	}
	resultsRow(result) {
		return (
			<Row key={result.ID} className="result">
				<Col xs={1}>
					{result.place}
				</Col>
				<Col xs={6}>
					{result.name}
				</Col>
				<Col xs={1}>
					{result.nat}
				</Col>	
				<Col xs={1}>
					{result.par}
				</Col>
				<Col xs={2}>
					{result.result}
				</Col>								
			</Row>
		)		
	}
}

export default SingleRace
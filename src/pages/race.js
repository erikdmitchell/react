import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Race extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			race: {},
		}
	}
	componentWillMount() {	
console.log('cwm');			
		var data=this.loadData();
console.log(data);
		//this.setState({race : data});		
	}
	render() {	
		const race=this.state.race;
console.log(this.state.race);			
		return (
			<Grid className="race">
				<Row key={race.id} className="race-name">
				<Col xs={12}>
				</Col>
			</Row>
			</Grid>
    	)
	}
	loadData() {	
		let url='http://uci.dev/wp-json/uci/v1/races/' + this.props.params.raceId;		

		fetch(url)
			.then(response => response.json())
			.then(json => {
console.log(json);				
			})
		.catch((error) => {
			console.error(error);
		});
console.log(json);
console.log(data);		
	}
}

export default Race
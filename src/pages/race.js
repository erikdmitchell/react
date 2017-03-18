import React from 'react';
import SingleRace from './views/single-race';

class Race extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			race: {},
			ready: false
		}
	}
	componentDidMount() {		
		this.getRace();
	}
	render() {		
		if (!this.state.ready) {
			return(<div />);			
		} else {
			return (
				<div>
					<SingleRace race={this.state.race} />
				</div>
	    	)
    	}
	}
	getRace() {			
		let url='http://uci.dev/wp-json/uci/v1/races/' + this.props.params.raceId;		

		fetch(url)
			.then(response => response.json())
			.then(json => {			
				this.setRace(json);
			})
		.catch((error) => {
			console.error(error);
		});		
	}
	setRace(race) {
		this.setState({
			race : race,
			ready : true
		});
	}
}

export default Race
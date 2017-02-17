import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class UserList extends React.Component {	
	render() {		
		return (
			<Grid className="user-list">
				{Object.keys(this.props.users).map(function(key) {
					var user = this.props.users[key];

					return this.createListItem(user);
					
				}, this)}
			</Grid>
    	)
	}
	createListItem(user) {
		return (
			<Row key={user.id} className="user">
				<Col xs={6}>
					<a href="#" onClick={this.props.showDetails.bind(null, user.id)}>{user.name}</a>
				</Col>
			</Row>
		)
	}
}

export default UserList
import React from 'react';
import { Link } from 'react-router';
import { Button, Grid, Row, Col } from 'react-bootstrap';

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
					<Link to={'/users/' + user.slug}>{user.name}</Link>
				</Col>
			</Row>
		)
	}
}

export default UserList
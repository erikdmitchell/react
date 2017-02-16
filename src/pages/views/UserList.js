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
					<a href="#" onClick={this.openUserModal.bind(this, user.id)}>{user.name}</a>
				</Col>
			</Row>
		)
	}
	openUserModal(userID) {
console.log('open user modal');		
		//Modal.open();
		//<Modal />
		//return (<Modal />)
/*
		fetch('http://koksijde.dev/wp-json/wp/v2/users')
			.then(response => response.json())
			.then(json => {
				this.setState({
					users: json
				})
			})
		.catch((error) => {
			console.error(error);
		});	
*/	
	}
}

export default UserList
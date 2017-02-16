import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class UserList extends React.Component {
	render() {		
		return (
			<ul className="user-list">
				{Object.keys(this.props.users).map(function(key) {
					var user = this.props.users[key];

					return this.createListItem(user);
					
				}, this)}
			</ul>
    	)
	}
	createListItem(user) {
		return (
			<li key={user.id}>
				<Link to={'/users/' + user.slug}>{user.name}</Link>
				<Button onClick={this.props.toggleActive}>Toggle Active</Button>
			</li>
		)
	}
}


export default UserList
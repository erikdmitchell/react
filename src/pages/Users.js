import React from 'react';

import UserList from './views/UserList';

class Users extends React.Component {
	constructor(props) {
		super(props);

		this.state = {users: {}}		
	}
	componentDidMount() {
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
	}
	render() {			
		return (
			<UserList users={this.state.users} />
		)
	}
}

export default Users
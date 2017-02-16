import React from 'react';
import { Grid } from 'react-bootstrap';

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
			<Grid>
				<UserList users={this.state.users} toggleActive={this.toggleActive} />
			</Grid>
		)
	}
	toggleActive() {
console.log('toogle active');		
	}
}

export default Users
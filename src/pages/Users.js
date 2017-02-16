import React from 'react';
import UserList from './views/UserList';
//import AppModal from '../components/modal';
import { Modal } from 'react-bootstrap';

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
			<div>
				<UserList users={this.state.users} />
				
				<Modal ref="payload"
                       header='header'
                       body='body'
                       footer='footer'
                       />
			</div>
		)
	}
}

export default Users
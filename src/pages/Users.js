import React from 'react';
import UserList from './views/UserList';
import AppModal from '../components/modal';

class Users extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: {},
			showModal: false,
			userDetails: false
		}
		this.showDetails = this.showDetails.bind(this);	
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
		const showModal = this.state.showModal;					
		
		let modal=null;
console.log(this.state);						
		if (showModal) {
			modal = <AppModal showModal={showModal} title={this.state.userDetails.name} />
		}
		
		return (
			
			
			<div>
				<UserList users={this.state.users} showDetails={this.showDetails} />

				{modal}
			</div>
		)
	}
	showDetails(userID) {
		fetch('http://koksijde.dev/wp-json/wp/v2/users/' + userID)
			.then(response => response.json())
			.then(json => {
				this.setState({
					showModal: true,
					userDetails: json
				})
			})
		.catch((error) => {
			console.error(error);
		});
		
	}
}

export default Users
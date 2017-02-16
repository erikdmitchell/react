import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
     
class Header extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Nav>
					<LinkContainer to="/">
						<NavItem eventKey={1}>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/users">
						<NavItem eventKey={2}>Users</NavItem>
					</LinkContainer>
					<LinkContainer to="/widgets">
						<NavItem eventKey={3}>Widgets</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		)
	}
}

export default Header
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
     
class Header extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Nav>
					<IndexLinkContainer to="/">
						<NavItem eventKey={1}>Home</NavItem>
					</IndexLinkContainer>
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
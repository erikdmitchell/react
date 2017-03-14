import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

var FontAwesome = require('react-fontawesome');
     
class Header extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Nav>
					<IndexLinkContainer to="/">
						<NavItem eventKey={1}><FontAwesome name='home' /></NavItem>
					</IndexLinkContainer>
					<LinkContainer to="/races">
						<NavItem eventKey={2}><FontAwesome name='flag-checkered' /></NavItem>
					</LinkContainer>
					<LinkContainer to="/riders">
						<NavItem eventKey={3}><FontAwesome name='users' /></NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		)
	}
}

export default Header
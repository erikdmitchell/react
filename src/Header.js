import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
     
class Header extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Nav>
					<IndexLinkContainer to="/">
						<NavItem eventKey={1}><i className="fa fa-home" aria-hidden="true"></i></NavItem>
					</IndexLinkContainer>
					<LinkContainer to="/races">
						<NavItem eventKey={2}>Races</NavItem>
					</LinkContainer>
					<LinkContainer to="/riders">
						<NavItem eventKey={3}>Riders</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		)
	}
}

export default Header
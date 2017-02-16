import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
     
class Header extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse toggleNavKey={0}>
				<Nav right activeKey={0}>
					<NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
					<NavItem eventKey={2}><Link to="/users">Users</Link></NavItem>
					<NavItem eventKey={3}><Link to="/widgets">Widgets</Link></NavItem>
				</Nav>
			</Navbar>
		)
	}
}

export default Header
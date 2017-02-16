import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Grid, Button } from 'react-bootstrap';

import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';
import styles from './styles/app.css';

import Header from './Header';
import Footer from './Footer';

var MainLayout = React.createClass({
  render: function() {
    return (
      	<div className={styles.this}>
	    	<Header />

	        <div className="main">
	        	{this.props.children}
	        </div>
	        
			<Footer />
		</div>
    )
  }
})

var Home = React.createClass({
  render: function() {
    return (
    	<Grid>
	    	<h1>Home Page</h1>
	    </Grid>
    )
  }
})

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
})

var UserListContainer = React.createClass({
	getInitialState() {
		return {
			users: {}
		}
	},
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
	},
	render() {	
		return (<UserList users={this.state.users} toggleActive={this.toggleActive} />);
	},
	toggleActive() {
console.log('toogle active');		
	}
})

var WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
})

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Home} />
					<Route component={SearchLayout}>
						<Route path="users" component={UserListContainer} />
						<Route path="widgets" component={WidgetList} />
					</Route> 
				</Route>
			</Router>
		)
	}
}

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


export default App
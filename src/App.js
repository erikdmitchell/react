import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';
import styles from './styles/app.css';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import WidgetList from './pages/Widgets';
import Users from './pages/Users';

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

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Home} />
					<Route component={SearchLayout}>
						<Route path="users" component={Users} />
						<Route path="widgets" component={WidgetList} />
					</Route> 
				</Route>
			</Router>
		)
	}
}

export default App
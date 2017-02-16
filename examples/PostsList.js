import React from 'react';
import styles from './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {items: {}}		
	}
	
	componentDidMount() {		
		fetch(this.props.source)
			.then(response => response.json())
			.then(json => {
				this.setState({
					items: json
				})
			})
		.catch((error) => {
			console.error(error);
		});
	}
	
	render() {
		return (
			<div className={styles.this}>
				{Object.keys(this.state.items).map(function(key) {
					var item = this.state.items[key];
		
					return (
						<div className="post" key={item.id}>
							<a href={item.link}>{item.title.rendered}</a>
						</div>
					);
				}, this)}
			</div>
		)
	}
}

export default App
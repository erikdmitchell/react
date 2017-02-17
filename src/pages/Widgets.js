import React from 'react';
import { Grid } from 'react-bootstrap';

class WidgetList extends React.Component {
	render() {
	    return (
	    	<Grid>
				<ul className="widget-list">
					<li>Widget 1</li>
					<li>Widget 2</li>
					<li>Widget 3</li>
				</ul>
		    </Grid>
	    )
	}
}

export default WidgetList
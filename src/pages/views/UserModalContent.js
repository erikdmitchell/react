import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class UserModalContent extends React.Component {
	render() {	
		const user = this.props.userInfo;
		
		return (
			<Grid className="user-modal-content">
				<Row>
					
					<Col xs={2}>
						<img src={user.avatar_urls[96]} alt="avatar" class="img-responsive" />
					</Col>
					
					<Col xs={10}>
						<Row className="name">
							<Col xs={12}>
								<label>Name:</label> {user.name}
							</Col>
						</Row>
						<Row className="slug">
							<Col xs={12}>
								<label>Slug:</label> {user.slug}
							</Col>
						</Row>
						<Row className="description">
							<Col xs={12}>
								<label>Description:</label> {user.description}
							</Col>
						</Row>				
						<Row className="url">
							<Col xs={12}>
								<label>URL:</label> {user.url}
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
    	)
	}
}

export default UserModalContent
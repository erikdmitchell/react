import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class AppModal extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {showModal: props.showModal}	
	}
	close() {
    	this.setState({ showModal: false })
	}
	open() {		
    	this.setState({ showModal: true })
	}
	render() {			
		return (
			<div>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.content}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>{this.props.closeButtonText}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

AppModal.defaultProps= {
	showModal: false,
	title: 'Sample Modal Title',
	content: 'Sample modal content goes here.',
	closeButtonText: 'Close',
}

export default AppModal
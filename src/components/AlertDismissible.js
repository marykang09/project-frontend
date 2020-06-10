import React from 'react'
import {Button, Alert} from 'react-bootstrap'


class AlertDismissible extends React.Component {
	constructor(props) {
        super(props);
        
		this.state = { show: true };
	}

	render() {
		const handleHide = () => this.setState({ show: false });
		const handleShow = () => this.setState({ show: true });
		return (
			<>
				<Alert show={this.state.show} variant="success" style={{ maxWidth: 500 }}>
					<Alert.Heading>How's it going?!</Alert.Heading>
					<p>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
						eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
						amet fermentum.
                    </p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={handleHide} variant="outline-success">
							Close me ya'll!
                        </Button>
					</div>
				</Alert>

				{!this.state.show && <Button onClick>Show Alert</Button>}
			</>
		);
	}
}

export default AlertDismissible
import React from 'react'
import { Accordion, Card, Button, Modal, Image, Form, Row, Col } from 'react-bootstrap'

class TenantComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdateModal: false,
            showDeleteModal: false,
        }
        this.deleteTenant = this.deleteTenant.bind(this);
        this.updateTenant = this.updateTenant.bind(this);
        this.openUpdateModal = this.openUpdateModal.bind(this);
        this.closeUpdateModal = this.closeUpdateModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.apartmentInput = React.createRef();
        this.imgInput = React.createRef();
    }


    deleteTenant() {
        this.props.deleteFunc(this.props.dataKey);
        this.closeDeleteModal();
    }

    updateTenant() {
        this.props.tenantData.name = this.nameInput.current.value;
        this.props.tenantData.email = this.emailInput.current.value;
        this.props.tenantData.password = this.passwordInput.current.value;
        this.props.tenantData.apartment = this.apartmentInput.current.value;
        this.props.updateFunc(this.props.dataKey, this.props.tenantData);
        this.closeUpdateModal();
    }
    openUpdateModal() {
        this.setState({ showUpdateModal: true })
    }

    closeUpdateModal() {
        this.setState({ showUpdateModal: false })
    }

    openDeleteModal() {
        this.setState({ showDeleteModal: true })
    }

    closeDeleteModal() {
        this.setState({ showDeleteModal: false })
    }

    render() {
        const { showUpdateModal } = this.state;
        const { showDeleteModal } = this.state;
        
        return (
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={this.props.dataKey}>
                            {this.props.tenantData.name}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={this.props.dataKey}>
                        <Card.Body>
                            <div>
                               email: {this.props.tenantData.email}
                            </div>
                            <div>
                            Apartment: {this.props.tenantData.apartment}
                            </div>
                            <div>
                                <Button onClick={this.openDeleteModal} variant="danger">Delete Tenant</Button>
                                <Button onClick={this.openUpdateModal} variant="primary">Update Tenant</Button>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Modal show={showUpdateModal} onHide={this.closeUpdateModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Tenant Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.nameInput} type="text" placeholder="Name" defaultValue={this.props.tenantData.name} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    E-Mail
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.emailInput} type="email" placeholder="E-Mail" defaultValue={this.props.tenantData.email}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.passwordInput} type="password" placeholder="Password" defaultValue={this.props.tenantData.password} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalApartment">
                                <Form.Label column sm={2}>
                                    Apartment Number
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.apartmentInput} type="text" placeholder="Apartment Number" defaultValue={this.props.tenantData.apartment}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeUpdateModal}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.updateTenant}>
                            Update Tenant
                    </Button>
                    </Modal.Footer>
                </Modal>

                
                <Modal show={showDeleteModal} onHide={this.closeDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Tenant</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeDeleteModal}>Cancel</Button>
                        <Button variant="danger" onClick={this.deleteTenant}>Yes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}


export default TenantComp;

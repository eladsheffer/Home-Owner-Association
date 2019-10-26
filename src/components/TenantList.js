import React from 'react'
import { Accordion, Container, Modal, Button, Image, Form, Row, Col } from 'react-bootstrap'
import jsonUsers from '../data-model/users';
import TenantComp from '../components/TenantComp';


class TenantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tenants: jsonUsers,
            index: 0,
            showModal: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createTenant = this.createTenant.bind(this);
        this.deleteTenant = this.deleteTenant.bind(this);
        this.updateTenant = this.updateTenant.bind(this);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.apartmentInput = React.createRef();
        this.imgInput = React.createRef();
    }

    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    createTenant() {
        const newTenant = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value,
            apartment: this.apartmentInput.current.value
            //img: this.state.newRecipeImg.URL,
        }
        this.state.tenants.push(newTenant);
        this.setState(this.state);
        this.closeModal();
    }

    deleteTenant(index) {
        this.state.tenants.splice(index, 1);
        this.setState(this.state);
    }

    updateTenant(index, updatedTenant) {
        this.state.tenants[index] = updatedTenant;
        this.setState(this.state);
    }



    render() {
        const { showModal } = this.state;
        let filterText = this.props.filterText.toLowerCase();

        let tenantCards = [];
        for (var i = 0; i < this.state.tenants.length; i++) {
            this.state.index = i;
            if (filterText === "" || this.state.tenants[i].name.toLowerCase().includes(filterText) || this.state.tenants[i].email.toLowerCase().includes(filterText) || this.state.tenants[i].apartment.toString().toLowerCase().includes(filterText)) {
                let tenantCard = <TenantComp tenantData={this.state.tenants[i]} dataKey={this.state.index} deleteFunc={this.deleteTenant} updateFunc={this.updateTenant} />
                tenantCards.push(tenantCard);
            }
        }

        return (
            <div>
                <Container className="d-flex">
                    <Button className="ml-auto" variant="link" onClick={this.openModal}>New Tenant</Button>
                </Container>
                <Accordion defaultActiveKey="0">
                    {tenantCards}
                </Accordion>

                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Tenant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.nameInput} type="text" placeholder="Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    E-Mail
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.emailInput} type="email" placeholder="E-Mail" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.passwordInput} type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalApartment">
                                <Form.Label column sm={2}>
                                    Apartment Number
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.apartmentInput} type="text" placeholder="Apartment Number" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createTenant}>
                            Add Tenant
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}


export default TenantList;

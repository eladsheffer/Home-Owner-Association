import React from 'react'
import HoaNavbar from '../components/HoaNavbar';
import { Form, Row, Col, Container, Image, Button, Modal } from 'react-bootstrap'
import TenantList from '../components/TenantList';
import { Redirect } from 'react-router-dom'

class TenantsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            index: 0,
            filterText: "",
        }

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.apartmentInput = React.createRef();
        this.imgInput = React.createRef();

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createTenant = this.createTenant.bind(this);

        this.filterSearch = this.filterSearch.bind(this);
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
        const tenants = this.props.tenants.push(newTenant);
        this.setState({ tenants });
        this.closeModal();
    }

    filterSearch(e) {
        this.state.filterText = e.target.value;
        this.setState(this.state);
    }

    render() {

        if(!this.props.activeUser)
        return <Redirect to="/"/>

        const { showModal } = this.state;
        const { activeUser, handleLogout } = this.props;

        let filterText = this.state.filterText.toLowerCase();

        let tenantsToDisplay=[];

            for (var i = 0; i < this.props.tenants.length; i++) {
                this.state.index = i;
                if (filterText === "" || this.props.tenants[i].name.toLowerCase().includes(filterText) || this.props.tenants[i].email.toLowerCase().includes(filterText) || this.props.tenants[i].apartment.toString().toLowerCase().includes(filterText)) {
                    tenantsToDisplay.push(this.props.tenants[i]);
                }
            }

        return (
            <div>
                <HoaNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <Container>
                    <h1>Tenants</h1>
                    <Form>
                        <Form.Group as={Row} controlId="formFitler">
                        <Col sm={12}>
                            <Form.Control inline onChange={this.filterSearch} className="rounded-pill" type="text" placeholder="Filter by Name, E-Mail and Apartment" />
                        </Col>
                        </Form.Group>
                    </Form>
                    <Container className="d-flex">
                        <Button className="ml-auto" variant="link" onClick={this.openModal}>New Tenant</Button>
                    </Container>
                    <TenantList tenants={tenantsToDisplay} deleteTenant={this.props.deleteTenant} updateTenant={this.props.updateTenant}/>
                </Container>

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

export default TenantsPage;
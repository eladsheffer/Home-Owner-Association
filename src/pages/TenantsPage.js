import React from 'react'
import { Form, Row, Col, Container, Image } from 'react-bootstrap'
import HoaNavbar from '../components/HoaNavbar';
import TenantList from '../components/TenantList';

class TenantsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
        }
        this.filterSearch = this.filterSearch.bind(this);
    }

    filterSearch(e) {
        this.state.filterText = e.target.value;
        this.setState(this.state);
        console.log(this.state.filterText);
    }

    render() {
        return (
            <div>
                <HoaNavbar />
                <Container>
                    <h1>Tenants</h1>
                    <Form>
                    <Form.Group as={Row} controlId="formFitler">
                        <Col sm={12}>
                            <Form.Control inline onChange={this.filterSearch} className="rounded-pill" type="text" placeholder="Filter by Name, E-Mail and Apartment" />
                        </Col>
                    </Form.Group>
                </Form>
                    <TenantList filterText={this.state.filterText}/>
                </Container>
            </div>

        );
    }
}

export default TenantsPage;
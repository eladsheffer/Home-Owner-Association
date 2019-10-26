import React from 'react'
import HoaNavbar from '../components/HoaNavbar';
import { Form, Row, Col, Container, Image } from 'react-bootstrap'
import MessageList from '../components/MessageList';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            priorityFilter: "all",
            sortBy: "date",
        }
        this.filterSearch = this.filterSearch.bind(this);
        this.filterPriority = this.filterPriority.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    filterSearch(e) {
        this.state.filterText = e.target.value;
        this.setState(this.state);
    }

    filterPriority(e) {
        this.state.priorityFilter = e.target.value;
        this.setState(this.state);
    }

    changeSort(e){
        this.state.sortBy = e.target.id;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <HoaNavbar />
                <Container>
                <h1>Messages</h1>
                <Form>
                    <Form.Group as={Row} controlId="formFitler">
                        <Col sm={6}>
                            <Form.Control inline onChange={this.filterSearch} className="rounded-pill" type="text" placeholder="Filter by Text in Title and Details" />
                        </Col>
                        <Col sm={2}>
                            <Form.Control as="select" onChange={this.filterPriority}>
                                <option value="all">All Messages</option>
                                <option value="info">Filter as info</option>
                                <option value="important">Filter as important</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={2}>
                            Sort by:
                                </Form.Label>
                        <Col sm={2}>
                            <Form.Check onChange={this.changeSort} ref={this.dateInput} defaultChecked inline type="radio" label="Date" name="formHorizontalRadios" id="date" />
                            <Form.Check onChange={this.changeSort} inline type="radio" label="Priority" name="formHorizontalRadios" id="priority" />
                        </Col>
                    </Form.Group>
                </Form>
                <MessageList filterText={this.state.filterText} priorityFilter={this.state.priorityFilter} sortBy={this.state.sortBy}/>
                </Container>
            </div>

        );
    }
}

export default MessagesPage;
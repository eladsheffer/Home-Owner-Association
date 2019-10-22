import React from 'react'
import HoaNavbar from '../components/HoaNavbar';
import { Form, Row, Col } from 'react-bootstrap'
import MessageList from '../components/MessageList';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            priorityFilter: "all",
        }
        this.filterSearch = this.filterSearch.bind(this);
        
        this.filterPriority = this.filterPriority.bind(this);
    }

    filterSearch(e) {
        this.state.filterText = e.target.value;
        this.setState(this.state);
    }

    filterPriority(e) {
        this.state.priorityFilter = e.target.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <HoaNavbar />
                <h1>Messages</h1>
                <Form>
                    <Form.Group as={Row} controlId="formFitler">
                        <Col sm={6}>
                            <Form.Control onChange={this.filterSearch} className="rounded-pill" type="text" placeholder="Filter by Text in Title and Details" />
                        </Col>
                        <Col sm={2}>
                            <Form.Control as="select" onChange={this.filterPriority}>
                                <option value="all">-</option>
                                <option value="info">Filter as info</option>
                                <option value="important">Filter as important</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={2}>
                            Sort by:
                                </Form.Label>
                        <Col sm={2}>
                            <Form.Check ref={this.priorityInput} defaultChecked inline type="radio" label="Date" name="formHorizontalRadios" id="formHorizontalInfo" />
                            <Form.Check inline type="radio" label="Priority" name="formHorizontalRadios" id="formHorizontalImportant" />
                        </Col>
                    </Form.Group>
                </Form>
                <MessageList filterText={this.state.filterText} priorityFilter={this.state.priorityFilter}/>
            </div>

        );
    }
}

export default MessagesPage;
import React from 'react'
import HoaNavbar from '../components/HoaNavbar';
import { Form, Row, Col } from 'react-bootstrap'
import MessageList from '../components/MessageList';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <HoaNavbar />
                <h1>Messages</h1>
                <Form>
                    <Form.Group as={Row} controlId="formFitler">
                        <Col sm={6}>
                            <Form.Control className="rounded-pill" type="text" placeholder="Filter by Text in Title and Details" />
                        </Col>
                        <Col sm={2}>
                            <Form.Control as="select">
                                <option>Filter by Priority</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={1}>
                            Sort by:
                                </Form.Label>
                        <Col sm={2}>
                            <Form.Check ref={this.priorityInput} defaultChecked inline type="radio" label="Date" name="formHorizontalRadios" id="formHorizontalInfo" />
                            <Form.Check inline type="radio" label="Priority" name="formHorizontalRadios" id="formHorizontalImportant" />
                        </Col>
                    </Form.Group>
                </Form>
                <MessageList/>
            </div>

        );
    }
}

export default MessagesPage;
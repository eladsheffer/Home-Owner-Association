import React from 'react'
import HoaNavbar from '../components/HoaNavbar';
import { Form, Row, Col, Container, Image, Button, Modal } from 'react-bootstrap'
import MessageList from '../components/MessageList';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            index: 0,
            filterText: "",
            priorityFilter: "all",
            sortBy: "date",
        }

        this.titleInput = React.createRef();
        this.detailsInput = React.createRef();
        this.priorityInput = React.createRef();
        this.imgInput = React.createRef();

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createMessage = this.createMessage.bind(this);

        this.filterSearch = this.filterSearch.bind(this);
        this.filterPriority = this.filterPriority.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    createMessage() {
        let priority;
        if (this.priorityInput.current.checked)
            priority = "info";
        else
            priority = "important";
        const newMessage = {
            title: this.titleInput.current.value,
            details: this.detailsInput.current.value,
            priority: priority,
            createdAt: new Date(),
            //img: this.state.newRecipeImg.URL,
        }
        
        const messages = this.props.messages.push(newMessage);
        this.setState({ messages });
        this.closeModal();
    }

    filterSearch(e) {
        this.state.filterText = e.target.value;
        this.setState(this.state);
    }

    filterPriority(e) {
        this.state.priorityFilter = e.target.value;
        this.setState(this.state);
    }

    changeSort(e) {
        this.state.sortBy = e.target.id;
        this.setState(this.state);
    }

    render() {
        const { showModal } = this.state;
        let filterText = this.state.filterText.toLowerCase();
        let priorityFilter = this.state.priorityFilter;
        let messagesToDisplay=[];

        if (this.state.sortBy === "date")
            this.props.messages.sort(function (a, b) { return Date.parse(b.createdAt) - Date.parse(a.createdAt) });
        else if (this.state.sortBy === "priority")
            this.props.messages.sort(function (a, b) { return Date.parse(b.createdAt) - Date.parse(a.createdAt) }).sort((function (a, b) {
                if (b.priority === "info" && a.priority === "important") {
                    return -1;
                }
                if (a.priority === "info" && b.priority === "important") {
                    return 1;
                }
                // a must be equal to b
                return 0;
            }));

            for (var i = 0; i < this.props.messages.length; i++) {
                this.state.index = i;
                if ((filterText === "" || this.props.messages[i].title.toLowerCase().includes(filterText) || this.props.messages[i].details.toLowerCase().includes(filterText)) && (priorityFilter === "all" || this.props.messages[i].priority === priorityFilter)) {
                    messagesToDisplay.push(this.props.messages[i]);
                }
            }

        return (
            <div>
                <HoaNavbar />
                <Container>
                    <h1>Messages</h1>
                    <Form>
                        <Form.Group as={Row} controlId="formFitler">
                            <Col sm={7}>
                                <Form.Control inline onChange={this.filterSearch} className="rounded-pill" type="text" placeholder="Filter by Text in Title and Details" />
                            </Col>
                            <Col sm={2}>
                                <Form.Control as="select" onChange={this.filterPriority}>
                                    <option value="all">All Messages</option>
                                    <option value="info">Filter as info</option>
                                    <option value="important">Filter as important</option>
                                </Form.Control>
                            </Col>
                            <Form.Label column sm={1}>
                                Sort by:
                                </Form.Label>
                            <Col sm={2}>
                                <Form.Check onChange={this.changeSort} ref={this.dateInput} defaultChecked inline type="radio" label="Date" name="formHorizontalRadios" id="date" />
                                <Form.Check onChange={this.changeSort} inline type="radio" label="Priority" name="formHorizontalRadios" id="priority" />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Container className="d-flex">
                        <Button className="ml-auto" variant="link" onClick={this.openModal}>New Message</Button>
                    </Container>
                    <MessageList messages={messagesToDisplay} deleteMessage={this.props.deleteMessage} updateMessage={this.props.updateMessage}/>
                </Container>

                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalTile">
                                <Form.Label column sm={2}>
                                    Title
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.titleInput} type="text" placeholder="Title" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalDetails">
                                <Form.Label column sm={2}>
                                    Details
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows="3" ref={this.detailsInput} type="text" placeholder="Details" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPriority">
                                <Form.Label column sm={2}>
                                    Priority
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check ref={this.priorityInput} defaultChecked inline type="radio" label="info" name="formHorizontalRadios" id="formHorizontalInfo" />
                                    <Form.Check inline type="radio" label="important" name="formHorizontalRadios" id="formHorizontalImportant" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Image
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="file" placeholder="Recipe image URL" accept="image/*" onChange={this.imgChange} />
                                </Col>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createMessage}>
                            Add Message
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

export default MessagesPage;
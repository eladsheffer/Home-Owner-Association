import React from 'react'
import { Accordion, Container, Modal, Button, Image, Form, Row, Col } from 'react-bootstrap'
import Message from '../data-model/Message';
import jsonmessages from '../data-model/messages';
import MessageComp from '../components/MessageComp';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: jsonmessages,
            index: 0,
            showModal: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);

        this.titleInput = React.createRef();
        this.detailsInput = React.createRef();
        this.priorityInput = React.createRef();
        this.imgInput = React.createRef();
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
            //img: this.state.newRecipeImg.URL,
        }

        this.state.messages.push(newMessage);
        this.setState(this.state);
        this.closeModal();
    }

    deleteMessage(index) {
        this.state.messages.splice(index, 1);
        this.setState(this.state);
    }

    updateMessage(index, updatedMessage) {
        this.state.messages[index]=updatedMessage;
        this.setState(this.state);
    }

    render() {
        const { showModal } = this.state;

        let messageCards = [];
        for (var i = 0; i < this.state.messages.length; i++) {
            this.state.index = i;
            let messageCard = <MessageComp messageData={this.state.messages[i]} dataKey={this.state.index} deleteFunc={this.deleteMessage} updateFunc={this.updateMessage}/>
            messageCards.push(messageCard);
        }

        return (
            <div>
                <Container className="ml-auto">
                    <Button variant="link" onClick={this.openModal}>New Message</Button>
                </Container>
                <Accordion defaultActiveKey="0">
                    {messageCards}
                </Accordion>

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


export default MessageList;

import React from 'react'
import { Accordion, Card, Button, Modal, Image, Form, Row, Col } from 'react-bootstrap'

class MessageComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
        this.deleteMessage = this.deleteMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.titleInput = React.createRef();
        this.detailsInput = React.createRef();
        this.infoInput = React.createRef();
        this.importantInput = React.createRef();
        this.imgInput = React.createRef();
    }
    deleteMessage() {
        this.props.deleteFunc(this.props.dataKey);
    }

    updateMessage() {
        this.props.messageData.title = this.titleInput.current.value;
        this.props.messageData.details = this.detailsInput.current.value;
        if (this.infoInput.current.checked)
            this.props.messageData.priority = "info";
        else
            this.props.messageData.priority = "important";
        this.props.updateFunc(this.props.dataKey, this.props.messageData);
        this.closeModal();
    }
    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    componentDidUpdate() {
        if (this.state.showModal)
            if (this.props.messageData.priority === "info")
                this.infoInput.current.checked = true;
            else
                this.importantInput.current.checked = true;
    }

    render() {
        const { showModal } = this.state;


        return (
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={this.props.dataKey}>
                            {this.props.messageData.title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={this.props.dataKey}>
                        <Card.Body>
                            <div>
                                {this.props.messageData.details}
                            </div>
                            <div>
                                priority: {this.props.messageData.priority}
                            </div>
                            <div>
                                <Button onClick={this.deleteMessage} variant="primary">Delete Message</Button>
                                <Button onClick={this.openModal} variant="primary">Update Message</Button>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Message Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalTile">
                                <Form.Label column sm={2}>
                                    Title
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.titleInput} type="text" placeholder="Title" defaultValue={this.props.messageData.title} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalDetails">
                                <Form.Label column sm={2}>
                                    Details
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows="3" ref={this.detailsInput} type="text" placeholder="Details" defaultValue={this.props.messageData.details} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPriority">
                                <Form.Label column sm={2}>
                                    Priority
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Check ref={this.infoInput} inline type="radio" label="info" name="formHorizontalRadios" id="formHorizontalInfo" />
                                    <Form.Check ref={this.importantInput} inline type="radio" label="important" name="formHorizontalRadios" id="formHorizontalImportant" />
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
                        <Button variant="primary" onClick={this.updateMessage}>
                            Update Message
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default MessageComp;

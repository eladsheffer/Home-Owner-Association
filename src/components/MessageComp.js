import React from 'react'
import { Accordion, Card, Button, Modal, Image, Form, Row, Col } from 'react-bootstrap'

class Important extends React.Component {
    render() {
        return <Image src="icons/important.png" rounded />
    }
}

class Info extends React.Component {
    render() {
        return <Image src="icons/info.png" rounded />
    }
}

class CommitteeMemberView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div>
            <Button onClick={this.props.showDeleteModal} variant="danger">Delete Message</Button>
            <Button onClick={this.props.showUpdateModal} variant="primary">Update Message</Button>
        </div>
    }
}

class MessageComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdateModal: false,
            showDeleteModal: false,
        }
        this.deleteMessage = this.deleteMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.openUpdateModal = this.openUpdateModal.bind(this);
        this.closeUpdateModal = this.closeUpdateModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

        this.titleInput = React.createRef();
        this.detailsInput = React.createRef();
        this.infoInput = React.createRef();
        this.importantInput = React.createRef();
        this.imgInput = React.createRef();
    }


    deleteMessage() {
        this.props.deleteMessage(this.props.messageData, this.props.dataKey);
        this.closeDeleteModal();
    }

    updateMessage() {
        this.props.messageData.title = this.titleInput.current.value;
        this.props.messageData.details = this.detailsInput.current.value;
        if (this.infoInput.current.checked)
            this.props.messageData.priority = "info";
        else
            this.props.messageData.priority = "important";
        this.props.updateMessage(this.props.messageData, this.props.dataKey);
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

    componentDidUpdate() {
        if (this.state.showUpdateModal)
            if (this.props.messageData.priority === "info")
                this.infoInput.current.checked = true;
            else
                this.importantInput.current.checked = true;
    }

    render() {
        const { showUpdateModal } = this.state;
        const { showDeleteModal } = this.state;
        const { activeUser } = this.props;
        let icon = this.props.messageData.priority === "info" ? <Info /> : <Important />;
        let committeeMemberView = activeUser.isCommitteeMember ? <CommitteeMemberView showUpdateModal={this.openUpdateModal} showDeleteModal={this.openDeleteModal} /> : null;
        return (
            <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={this.props.dataKey}>
                            {this.props.messageData.title}
                        </Accordion.Toggle>
                        <span className="priority-icon">  {icon} </span>
                    </Card.Header>
                    <Accordion.Collapse eventKey={this.props.dataKey}>
                        <Card.Body>
                            <div>
                                {this.props.messageData.details}
                            </div>
                            <div>
                                priority: {this.props.messageData.priority}
                            </div>
                            {committeeMemberView}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Modal show={showUpdateModal} onHide={this.closeUpdateModal} size="lg">
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
                            {/* <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Image
                            </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="file" placeholder="Recipe image URL" accept="image/*" onChange={this.imgChange} />
                                </Col>
                            </Form.Group> */}

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeUpdateModal}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.updateMessage}>
                            Update Message
                    </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={showDeleteModal} onHide={this.closeDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Message</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeDeleteModal}>Cancel</Button>
                        <Button variant="danger" onClick={this.deleteMessage}>Yes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}


export default MessageComp;

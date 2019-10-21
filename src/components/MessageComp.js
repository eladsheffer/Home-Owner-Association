import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

class MessageComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.deleteMessage = this.deleteMessage.bind(this);
    }
    deleteMessage() {
        this.props.deleteFunc(this.props.dataKey);
    }

    render() {
        return (
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
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>


        );
    }
}


export default MessageComp;

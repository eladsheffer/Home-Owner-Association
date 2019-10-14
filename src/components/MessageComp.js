import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

class MessageComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {this.props.messageData.title}
                    </Accordion.Toggle>
                </Card.Header><Accordion.Collapse eventKey="0">
                    <Card.Body>
                    {this.props.messageData.description}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        );
    }
}


export default MessageComp;

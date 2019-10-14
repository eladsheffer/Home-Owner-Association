import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import Message from '../data-model/Message';
import messages from '../data-model/messages';
import axios from 'axios';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get("messages.json").then(res => {
          console.log(res);
          
          res.data.forEach(message => {
            let newMessage = new Message(message);
            this.state.messages.concat(newMessage);
          });
          // for (let i = 0; i < res.data.length; i++) {
          //   let newCar = new Car(res.data[i].brand, res.data[i].model, 
          //     res.data[i].year, res.data[i].km);
          //   this.state.cars.push(newCar);
          // }
          
          this.state.isLoading = false;
          this.setState(this.state);
        })
      }

    render() {


        
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>

        );
    }
}


export default MessageList;

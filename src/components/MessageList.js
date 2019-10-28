import React from 'react'
import { Accordion, Container, Modal, Button, Image, Form, Row, Col } from 'react-bootstrap'
import Message from '../data-model/Message';
import MessageComp from '../components/MessageComp';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }

        this.deleteMessage = this.deleteMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

   

    deleteMessage(index) {
        this.props.messages.splice(index, 1);
        this.setState(this.state);
    }

    updateMessage(index, updatedMessage) {
        this.props.messages[index] = updatedMessage;
        this.setState(this.state);
    }



    render() {
        const { messages } = this.props;

        let messageCards = [];
        for (var i = 0; i < messages.length; i++) {
            this.state.index = i;

            let messageCard = <MessageComp messageData={messages[i]} dataKey={this.state.index} deleteFunc={this.deleteMessage} updateFunc={this.updateMessage} />
            messageCards.push(messageCard);

        }

        return (
            <div>
                <Accordion defaultActiveKey="0">
                    {messageCards}
                </Accordion>  
            </div>

        );
    }
}


export default MessageList;

import React from 'react'
import { Accordion } from 'react-bootstrap'
import Message from '../data-model/Message';
import messages from '../data-model/messages';
import axios from 'axios';
import MessageComp from '../components/MessageComp';


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
            
            this.state.isLoading = false;
            this.setState(this.state);
        })
        
    }

    render() {

        let messageCards = [];
        for (var i = 0; i < this.state.messages.length; i++) {
            let messageCard = <MessageComp messageData={this.state.messages[i]}/>
            messageCards.concat(messageCard);
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

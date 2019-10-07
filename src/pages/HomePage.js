import React from 'react'
import MessageList from '../components/MessageList';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
            <h1>Home</h1>
            <MessageList/>
            </div>
        );
    }
}

export default HomePage;
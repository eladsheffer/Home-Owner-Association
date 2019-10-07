import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <HoaNavbar/>
                <h1>Messages</h1>
            </div>
            
        );
    }
}

export default MessagesPage;
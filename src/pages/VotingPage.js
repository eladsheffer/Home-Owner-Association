import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class VotingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <HoaNavbar/>
                <h1>Voting</h1>
            </div>
            
        );
    }
}

export default VotingPage;
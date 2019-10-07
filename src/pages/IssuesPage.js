import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class IssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <HoaNavbar/>
                <h1>Issues</h1>
            </div>
            
        );
    }
}

export default IssuesPage;
import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <HoaNavbar/>
                <h1>Dashboard</h1>
            </div>
            
        );
    }
}

export default DashboardPage;
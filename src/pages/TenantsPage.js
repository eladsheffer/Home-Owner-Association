import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class TenantsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <HoaNavbar/>
                <h1>Tenants</h1>
            </div>
            
        );
    }
}

export default TenantsPage;
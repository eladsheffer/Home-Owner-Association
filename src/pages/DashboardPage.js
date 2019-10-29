import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const { activeUser, handleLogout } = this.props;
console.log(activeUser);
        return (  
            <div>
                <HoaNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <h1>Dashboard</h1>
            </div>
            
        );
    }
}

export default DashboardPage;
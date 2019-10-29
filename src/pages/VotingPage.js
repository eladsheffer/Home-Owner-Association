import React from 'react'
import HoaNavbar from '../components/HoaNavbar';

class VotingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <HoaNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <h1>Voting</h1>
            </div>

        );
    }
}

export default VotingPage;
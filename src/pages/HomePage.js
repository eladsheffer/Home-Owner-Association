import React from 'react'
import { Container, Image, Jumbotron, Button } from 'react-bootstrap';
import HoaNavbar from '../components/HoaNavbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <HoaNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron className="center">
                    <Container className="logo">
                        <h2 className="logo">Home Owner Association</h2>
                        <p>Communicate with your community</p>
                        <p>
                            <Image src="RealStateJump.gif" className="logo"/>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;
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
                    <Container>
                        <h1 className="display-3">Home Owner Association</h1>
                        <p>Communicate with your community</p>
                        <p>
                            <Image src="https://landerapp.com/blog/wp-content/uploads/2016/07/20160707-RealStateJump.gif" className="logo" />
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;
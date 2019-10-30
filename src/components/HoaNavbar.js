import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class HoaNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.handleLogout();

        if (window.location.hash !== "#/") {
            this.setState({ redirectToHome: true })
        }
    }
    render() {

        const { activeUser } = this.props;
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        let signupLink = !activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null;
        let loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        let logoutLink = activeUser ? <Nav.Link onClick={this.logout}>Logout</Nav.Link> : null;
        let menu = activeUser ?
            <Nav className="mr-auto">
                <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#/tenants">Tenants</Nav.Link>
                <Nav.Link href="#/messages">Messages</Nav.Link>
                <Nav.Link href="#/issues">Issues</Nav.Link>
                <Nav.Link href="#/voting">Voting</Nav.Link>
            </Nav> : null;

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">Hoa Systems</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {menu}
                    </Nav>
                    <Nav className="ml-auto">
                        {signupLink}
                        {loginLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HoaNavbar;
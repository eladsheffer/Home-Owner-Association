import React from 'react'
import { Form, Alert, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            invalidLogin: false,
            successLogin: false
        }
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();

        this.login = this.login.bind(this);
    }

    login(event) {

        if (!(event.charCode === 13 || event.target.type ==="button"))
            return;
            
        const { users } = this.props;
        let newActiveUser = null;
        for (let i = 0; i < users.length && !newActiveUser; i++) {
            if (users[i].email === this.emailInput.current.value &&
                users[i].password === this.passwordInput.current.value) {
                    newActiveUser = users[i];
                }
        }

        if (newActiveUser) {
            this.props.handleLogin(newActiveUser);
            this.setState({successLogin: true});

        } else {
            this.setState({invalidLogin: true});
        }


    }

    render() { 
        if (this.state.successLogin) {
            return <Redirect to="/messages"/>
        }
        return (  
            <div className="login">
            <h1>Login</h1>
            <p>or <a href="#/signup">create an account</a></p>
            <Alert variant="danger" show={this.state.invalidLogin}>
                Invalid email or password!
            </Alert>
            <Form onKeyPress={this.login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={this.emailInput} type="email" placeholder="Enter email" defaultValue="elad@elad.com"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={this.passwordInput}  type="password" placeholder="Password" value="123"/>
                </Form.Group>
                <Button variant="success" type="button" block onClick={this.login}>
                    Login
                </Button>
            </Form>

        </div>

        );
    }
}

export default LoginPage;
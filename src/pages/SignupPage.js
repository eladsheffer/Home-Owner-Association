import React from 'react'
import { Form, Alert, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            successLogin: false
         }
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.addressInput = React.createRef();
        this.apartmentInput = React.createRef();
        this.cityInput = React.createRef();

        this.signup = this.signup.bind(this);
    }

    signup(){
        const {users, communities}=this.props;

        const newTenant = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value,
            apartment: this.apartmentInput.current.value,
            isCommitteeMember: true
        }

        const newCommunity={
            address: this.addressInput.current.value,
            city: this.cityInput.current.value,
        }

        this.props.createCommitteeMember(newCommunity, newTenant);

        this.props.handleLogin(newTenant);
        this.setState({successLogin: true});
    }

    render() { 
        if (this.state.successLogin) {
            return <Redirect to="/messages"/>
        }

        return (  
            <div className="login">
            <h1>Create a Committee Member Account</h1>
            <Form>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={this.nameInput} type="text" placeholder="Enter your name"/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={this.emailInput} type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={this.passwordInput}  type="password" placeholder="Password"/>
            </Form.Group>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control ref={this.addressInput} type="text" placeholder="Enter address"/>
            </Form.Group>

            <Form.Group controlId="aparment">
                <Form.Label>Apartment</Form.Label>
                <Form.Control ref={this.apartmentInput} type="text" placeholder="Enter apartment"/>
            </Form.Group>

            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control ref={this.cityInput} type="text" placeholder="Enter city"/>
            </Form.Group>
            <Button variant="success" type="button" block onClick={this.signup}>
                Sign Up
            </Button>
        </Form>
        </div>
        );
    }
}

export default SignupPage;
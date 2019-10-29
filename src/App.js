import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MessagesPage from './pages/MessagesPage'
import DashboardPage from './pages/DashboardPage'
import TenantsPage from './pages/TenantsPage'
import IssuesPage from './pages/IssuesPage'
import VotingPage from './pages/VotingPage'
import jsonMessages from './data-model/messages'
import jsonUsers from './data-model/users'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      activeUser: null,
    //   activeUser:     {
    //     "id": 1,
    //     "communityId": 1,
    //     "name": "Nir Channes",
    //     "email": "nir@nir.com",
    //     "password": "123",
    //     "apartment": 1,
    //     "isCommitteeMember": true
    // },
      allUsers: jsonUsers,
      allMessages: jsonMessages,
      activeUserMessages: []
      //activeUserMessages: jsonMessages.filter(message => message.communityId === 1)
    }
    this.createMessage = this.createMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.deleteTenant = this.deleteTenant.bind(this);
    this.updateTenant = this.updateTenant.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  createMessage(newMessage){
    newMessage.communityId=this.state.activeUser.communityId;

    const allMessages = this.state.allMessages.concat(newMessage);
    const activeUserMessages = this.state.activeUserMessages.concat(newMessage);

    this.setState({allMessages, activeUserMessages});
  }

  deleteMessage(index) {
    this.state.allMessages.splice(index, 1);
    this.setState(this.state);
  }

  updateMessage(index, updatedMessage) {
    this.state.allMessages[index] = updatedMessage;
    this.setState(this.state);
  }

  deleteTenant(index) {
    this.state.allUsers.splice(index, 1);
    this.setState(this.state);
  }

  updateTenant(index, updatedTenant) {
    this.state.allUsers[index] = updatedTenant;
    this.setState(this.state);
  }

  handleLogout() {
    this.setState({activeUser: null});
  }

  handleLogin(activeUser) {

    const activeUserMessages = this.state.allMessages.filter(message => message.communityId === activeUser.communityId)

    this.setState({activeUser, activeUserMessages});
  }

  render() {

    const { activeUser, allUsers, activeUserMessages } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/login">
          <LoginPage users={allUsers} handleLogin={this.handleLogin} activeUser={activeUser}/>
        </Route>
        <Route path="/signup">
          <SignupPage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/dashboard">
          <DashboardPage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/tenants">
          <TenantsPage tenants={this.state.allUsers} dataKey={this.state.index} deleteTenant={this.deleteTenant} updateTenant={this.updateTenant} activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/messages">
          <MessagesPage messages={this.state.activeUserMessages} dataKey={this.state.index} deleteMessage={this.deleteMessage} updateMessage={this.updateMessage} createMessage={this.createMessage} activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/issues">
          <IssuesPage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/voting">
          <VotingPage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
      </Switch>
    );
  }
}

export default App;

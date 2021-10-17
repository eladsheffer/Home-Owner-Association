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
import jsonCommunities from './data-model/Communities'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      activeUser: null,
      // activeUser: {
      //   "id": 1,
      //   "communityId": 1,
      //   "name": "Nir Channes",
      //   "email": "nir@nir.com",
      //   "password": "123",
      //   "apartment": 1,
      //   "isCommitteeMember": true
      // },
      allUsers: jsonUsers,
      allMessages: jsonMessages,
      allCommunities: jsonCommunities,
      activeUserMessages: [],
      activeUserTenants:[],
      //activeUserMessages: jsonMessages.filter(message => message.communityId === 1),
      //activeUserTenants: jsonUsers.filter(tenant => tenant.communityId === 1),
    }

    this.createCommitteeMember = this.createCommitteeMember.bind(this);

    this.createMessage = this.createMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);

    this.createTenant = this.createTenant.bind(this);
    this.deleteTenant = this.deleteTenant.bind(this);
    this.updateTenant = this.updateTenant.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  createMessage(newMessage) {
    newMessage.communityId = this.state.activeUser.communityId;
    newMessage.id = this.state.allMessages[this.state.allMessages.length - 1].id + 1;

    const allMessages = this.state.allMessages.concat(newMessage);
    const activeUserMessages = this.state.activeUserMessages.concat(newMessage);

    this.setState({ allMessages, activeUserMessages });
  }

  createTenant(newTenant) {
    newTenant.communityId = this.state.activeUser.communityId;
    newTenant.id = this.state.allUsers[this.state.allUsers.length - 1].id + 1;

    const allUsers = this.state.allUsers.concat(newTenant);
    const activeUserTenants = this.state.activeUserTenants.concat(newTenant);

    this.setState({ allUsers, activeUserTenants });
  }

  createCommitteeMember(newCommunity, newTenant) {
    newCommunity.id = this.state.allCommunities[this.state.allCommunities.length - 1].id + 1;
    newTenant.id = this.state.allUsers[this.state.allUsers.length - 1].id + 1;
    newTenant.communityId=newCommunity.id;

    const allCommunities = this.state.allCommunities.concat(newCommunity);
    
    const activeUserTenants = this.state.activeUserTenants.concat(newTenant);
    const allUsers = this.state.allUsers.concat(newTenant);

    this.setState({ allCommunities, allUsers, activeUserTenants });
  }

  deleteMessage(message, index) {
    this.state.activeUserMessages.splice(index, 1);

    for (let i = 0; i < this.state.allMessages.length; i++) {
      if (this.state.allMessages[i].id === message.id) {
        this.state.allMessages.splice(i, 1);
        break;
      }
    }

    this.setState(this.state);
  }

  updateMessage(updatedMessage, index) {
    this.state.activeUserMessages[index] = updatedMessage;

    for (let i = 0; i < this.state.allMessages.length; i++) {
      if (this.state.allMessages[i].id === updatedMessage.id) {
        this.state.allMessages[i] = this.updatedMessage;
        break;
      }
    }

    this.setState(this.state);
  }

  deleteTenant(tenant, index) {
    this.state.activeUserTenants.splice(index, 1);

    for (let i = 0; i < this.state.allUsers.length; i++) {
      if (this.state.allUsers[i].id === tenant.id) {
        this.state.allUsers.splice(i, 1);
        break;
      }
    }
    this.setState(this.state);
  }

  updateTenant(updatedTenant, index) {
    this.state.activeUserTenants[index] = updatedTenant;
    for (let i = 0; i < this.state.allUsers.length; i++) {
      if (this.state.allUsers[i].id === this.updatedTenant.id) {
        this.state.allUsers[i] = this.updatedTenant;
        break;
      }
    }
    this.setState(this.state);
  }

  handleLogout() {
    this.setState({ activeUser: null });
  }

  handleLogin(activeUser) {

    const activeUserMessages = this.state.allMessages.filter(message => message.communityId === activeUser.communityId)
    const activeUserTenants = this.state.allUsers.filter(tenant => tenant.communityId === activeUser.communityId)

    this.setState({ activeUser, activeUserMessages, activeUserTenants });
  }

  render() {

    const { activeUser, allUsers, activeUserMessages, activeUserTenants, allCommunities } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/login">
          <LoginPage users={allUsers} handleLogin={this.handleLogin} activeUser={activeUser} />
        </Route>
        <Route path="/signup">
          <SignupPage activeUser={activeUser} handleLogout={this.handleLogout} user={allUsers} communities={allCommunities} createCommitteeMember={this.createCommitteeMember} handleLogin={this.handleLogin}/>
        </Route>
        <Route path="/dashboard">
          <DashboardPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/tenants">
          <TenantsPage tenants={activeUserTenants} deleteTenant={this.deleteTenant} updateTenant={this.updateTenant} createTenant={this.createTenant} activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/messages">
          <MessagesPage messages={activeUserMessages} deleteMessage={this.deleteMessage} updateMessage={this.updateMessage} createMessage={this.createMessage} activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/issues">
          <IssuesPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/voting">
          <VotingPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}

export default App;

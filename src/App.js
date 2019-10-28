import React from 'react';
import logo from './logo.svg';
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
      index:0,
      activeUser: null,
      allUsers: jsonUsers,
      allMessages: jsonMessages,
    }
    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  deleteMessage(index) {
    this.state.allMessages.splice(index, 1);
    this.setState(this.state);
}

updateMessage(index, updatedMessage) {
    this.state.allMessages[index] = updatedMessage;
    this.setState(this.state);
}
  
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/tenants">
          <TenantsPage />
        </Route>
        <Route path="/messages">
          <MessagesPage messages={this.state.allMessages} dataKey={this.state.index} deleteMessage={this.deleteMessage} updateMessage={this.updateMessage}/>
        </Route>
        <Route path="/issues">
          <IssuesPage />
        </Route>
        <Route path="/voting">
          <VotingPage />
        </Route>
      </Switch>
  );
  }
}

export default App;

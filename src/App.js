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

class App extends React.Component {
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
          <MessagesPage />
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

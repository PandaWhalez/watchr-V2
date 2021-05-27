/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpManager from './SignUpManager.jsx';
import LoginManager from './LoginManager.jsx';
import HomePage from './HomePage.jsx';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" exact component={SignUpManager} />
            <Route path="/login" exact component={LoginManager} />
            <Route path="/homepage" exact component={HomePage} />
          </Switch> 
      </div>
          // <LoginManager />
          // <SignUpManager />
          // <HomePage />
    );
  }
}

export default MainContainer;

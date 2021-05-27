/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MainContainer from './MainContainer.jsx';
import './styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
    <Router>
      <MainContainer />
    </Router>
    );
  };
};

export default App;

/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;

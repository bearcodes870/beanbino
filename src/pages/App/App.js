import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Route exact path='/signup' render={() =>
        <SignupPage
        
        />
      } />
      </header>
    </div>
  );
}

export default App;

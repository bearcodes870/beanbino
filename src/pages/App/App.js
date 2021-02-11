import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SignoutPage from '../SignoutPage/SignoutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link className='btn btn-default' to='/signup'>Signup</Link>
      <Route exact path='/signup' render={() =>
        <SignupPage/>
      } />
      <Link className='btn btn-default' to='/login'>Login</Link>
      <Route exact path='/login' render={() =>
        <LoginPage/>
      } />
      <Link className='btn btn-default' to='/signout'>Signout</Link>
      <Route exact path='/signout' render={() =>
        <SignoutPage/>
      } />
      </header>
    </div>
  );
}

export default App;

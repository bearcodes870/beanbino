import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SignoutPage from '../SignoutPage/SignoutPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';

class App extends Component {
    constructor() {
      super();
      this.state = {
        ...this.getInitialState(),
        // Initialize user if there's a token, otherwise null
        user: userService.getUser()
      };
    }
  
    getInitialState() {
      return {
      };
    }
  
  
    /*--- Lifecycle Methods ---*/
  
  
render() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <Route exact path='/signup' render={({ history }) => 
                <SignupPage
                    history={history} 
                />
                }/>
                <Route exact path='/login' render={() =>
                <LoginPage/>
                } />
                <Route exact path='/signout' render={() =>
                <SignoutPage/>
                } />
            </header>
        </div>
        );
    }
}
  
export default App;

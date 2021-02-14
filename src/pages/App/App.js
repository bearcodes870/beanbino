import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SignoutPage from '../SignoutPage/SignoutPage';
import IndexPage from '../IndexPage/IndexPage';
import NewCoffeePage from '../NewCoffeePage/NewCoffeePage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';

class App extends Component {
    constructor() {
      super();
      this.state = {
        ...this.getInitialState(),
        coffees: [],
        user: userService.getUser()
      };
    }
  
    getInitialState() {
      return {
      };
    }

    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
        console.log(this.state.user);
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }
  
  
    /*--- Lifecycle Methods ---*/
  
  
render() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                />
                <Route exact path='/new-coffee' render={({}) =>
                <NewCoffeePage />
                 }/>
                <Switch>
                <Route exact path='/' render={({}) =>
                <IndexPage />
                 }/>
                
                <Route exact path='/signup' render={({ history }) => 
                <SignupPage
                    history={history}
                    handleSignupOrLogin={this.handleSignupOrLogin}   
                />
                }/>
                <Route exact path='/login' render={({ history }) => 
                <LoginPage
                    history={history}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                />
                }/>
                <Route exact path='/signout' render={() =>
                <SignoutPage/>
                } />
                </Switch>
            </header>
        </div>
        );
    }
}
  
export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import IndexPage from '../IndexPage/IndexPage';
import NewCoffeePage from '../NewCoffeePage/NewCoffeePage';
import CoffeeDetailPage from '../CoffeeDetailPage/CoffeeDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import coffeesService from '../../utils/coffeesService';

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

    handleUpdateCoffees = (coffees) => {
        this.setState({ coffees });
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

    async componentDidMount() {
        const coffees = await coffeesService.index();
        this.setState({ coffees });
      }

  
  
render() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                />
                <Route exact path='/new-coffee' render={(props) => (
                    userService.getUser() ?
                    <NewCoffeePage
                   {...props}/>
                   :
                   <Redirect to='/login' />
                )
                 }/>
                 <Route exact path='/details' render={(props) => (
                     userService.getUser() ?
                     <CoffeeDetailPage 
                    {...props}/>
                    :
                    <Redirect to='/login' />
                 )
                 }/>
                <Switch>
                <Route exact path='/' render={() =>
                <IndexPage
                    user={this.state.user}
                    coffees={this.state.coffees}
                    handleUpdateCoffees={this.handleUpdateCoffees}
                    />
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
                <IndexPage />
                } />
                </Switch>
            </header>
        </div>
        );
    }
}
  
export default App;

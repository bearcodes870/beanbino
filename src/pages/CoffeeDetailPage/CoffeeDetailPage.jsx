import React, { Component, Button } from 'react';
import CoffeeDetailCard from '../../components/CoffeeDetailCard/CoffeeDetailCard';
import UpdateCoffeeForm from '../../components/UpdateCoffeeForm/UpdateCoffeeForm';
import CoffeeDeleteForm from '../../components/CoffeeDeleteForm/CoffeeDeleteForm';

class CoffeeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coffee: props.location.state.coffee || {}
    }
  }

  render() {
    return (
      <div className='UpdateCoffeePage'>
        <CoffeeDetailCard coffee={this.state.coffee} />
        <UpdateCoffeeForm coffee={this.state.coffee} />
        <CoffeeDeleteForm coffee={this.state.coffee} />
      </div>
    );
  }
}

export default CoffeeDetailPage;

// init coffee as empty obj
// this.state
// when comp mounts, use coffeeService.getCoffee 
// coffee that is returned from this action will be set to state
// pass coffee from state to form as a prop
// go to coffee form - setup constructor to init state
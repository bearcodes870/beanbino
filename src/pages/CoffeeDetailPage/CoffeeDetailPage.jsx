import React, { Component } from 'react';
import coffeesService from '../../utils/coffeesService';
import UpdateCoffeeForm from '../../components/UpdateCoffeeForm/UpdateCoffeeForm';

class UpdateCoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coffees: [],
        name: '',
        region: ''
    }
  }

  async componentDidMount() {
    const coffee = await coffeesService.show();
    console.log(coffee);
  }
  render() {
    return (
      <div className='UpdateCoffeePage'>
        <UpdateCoffeeForm {...this.props} />
      </div>
    );
  }
}

export default UpdateCoffeePage;

// init coffee as empty obj
// this.state
// when comp mounts, use coffeeService.getCoffee 
// coffee that is returned from this action will be set to state
// pass coffee from state to form as a prop
// go to coffee form - setup constructor to init state
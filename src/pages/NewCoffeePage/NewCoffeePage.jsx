import React, { Component } from 'react';
import NewCoffeeForm from '../../components/NewCoffeeForm/NewCoffeeForm';

class NewCoffeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        region: ''
    }
  }

  render() {
    return (
      <div className='NewCoffeePage'>
        <NewCoffeeForm {...this.props} />
      </div>
    );
  }
}

export default NewCoffeePage;
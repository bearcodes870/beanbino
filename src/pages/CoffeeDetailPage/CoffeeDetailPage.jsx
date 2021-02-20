import React, { Component, Button } from 'react';
import CoffeeDetailCard from '../../components/CoffeeDetailCard/CoffeeDetailCard';
import UpdateCoffeeForm from '../../components/UpdateCoffeeForm/UpdateCoffeeForm';
import coffeesService from '../../utils/coffeesService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CoffeeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coffee: props.location.state.coffee || {}
    }
  }

  handleNewCoffee = (coffee) => {
      this.setState({coffee});
  }

  handleDeleteCoffee = async id => {
      await coffeesService.deleteCoffee(id);
      window.location = ('/')
  }

  render() {
    return (
      <div className='UpdateCoffeePage'>
        <CoffeeDetailCard coffee={this.state.coffee} />
        <UpdateCoffeeForm 
          coffee={this.state.coffee} 
          handleNewCoffee={this.handleNewCoffee} 
          history={this.props.history}
          />

        <button
          className='btn btn-xs btn-danger margin-left-10 delete-coffee'
          onClick={() => this.handleDeleteCoffee(this.state.coffee._id)}>
          DELETE
        </button>
      </div>
    );
  }
}

export default CoffeeDetailPage;
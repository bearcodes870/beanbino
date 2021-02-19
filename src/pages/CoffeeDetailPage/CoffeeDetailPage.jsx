import React, { Component, Button } from 'react';
import CoffeeDetailCard from '../../components/CoffeeDetailCard/CoffeeDetailCard';
import UpdateCoffeeForm from '../../components/UpdateCoffeeForm/UpdateCoffeeForm';
import CoffeeDeleteForm from '../../components/CoffeeDeleteForm/CoffeeDeleteForm';
<<<<<<< HEAD
import coffeesService from '../../utils/coffeesService';
=======
>>>>>>> adc8e784cddae87c5b7a15c84379e500fd7a7840
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
        <Container>
        <Row>
        <Col><CoffeeDetailCard coffee={this.state.coffee} /></Col>
        <Col>
        <UpdateCoffeeForm 
          coffee={this.state.coffee} 
          handleNewCoffee={this.handleNewCoffee} 
          history={this.props.history}
          />
        </Col>
        </Row>
        <CoffeeDeleteForm 
          coffee={this.state.coffee}
          handleDeleteCoffee={this.handleDeleteCoffee} 
          history={this.props.history}
          />
        </Container>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coffeesService from '../../utils/coffeesService';
import './UpdateCoffeeForm.css';

class UpdateCoffeeForm extends Component {
    // move state into constructor
    // initial state ex. name: props.coffee.name || ''
  state = {
    id: this.props.coffee._id || '',
    name: this.props.coffee.name || '',
    region: this.props.coffee.region || ''
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value

    });
  }
                                    

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCoffee = await coffeesService.updateCoffee(this.state);
      this.props.handleNewCoffee(newCoffee);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message);
    }
    this.props.history.push("/");
  }

  isFormInvalid() {
    return !(this.state.name && this.state.region);
  }

  render() {
    return (
      <div class="update-form">
        <header className="header-footer">Edit {this.state.name}'s Details </header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div class="mb-3" className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Coffee" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Region" value={this.state.region} name="region" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Update!</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCoffeeForm;

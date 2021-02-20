import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coffeesService from '../../utils/coffeesService';
import './NewCoffeeForm.css';

class NewCoffeeForm extends Component {

  state = {
    name: '',
    region: ''
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await coffeesService.create(this.state);
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
      <div className="new-coffee-form">
        &nbsp;&nbsp;&nbsp;
        <header className="header-footer">Add A New Coffee To Your Collection</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
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
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Add!</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCoffeeForm;

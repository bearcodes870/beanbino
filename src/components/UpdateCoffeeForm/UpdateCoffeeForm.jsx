import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coffeesService from '../../utils/coffeesService';

class UpdateCoffeeForm extends Component {
    // move state into constructor
    // initial state ex. name: props.coffee.name || ''
  state = {
    name: this.props.coffee.name || '',
    region: this.props.coffee.region || '',
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value

    });
  }
                                    

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await coffeesService.updateCoffee(this.state);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.region);
  }

  render() {
    return (
      <div>
        <header className="header-footer">You're Updating This Coffee ... </header>
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

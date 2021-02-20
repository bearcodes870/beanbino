import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coffeesService from '../../utils/coffeesService';

class IndexPage extends Component {

    async componentDidMount() {
      const coffees = await coffeesService.index();
      this.props.handleUpdateCoffees(coffees);
    }
  
    render() {
      const coffeeRows = this.props.coffees.map((coffee, idx) => (

          <div class="list-group" key={idx}>
            <div class="list-group-item list-group-item-action" aria-current="true">
                <div class="d-flex w-100 justify-content-between">
                <h2 class="mb-1">{coffee.name}</h2>
                <small>3 days ago</small>
                </div>
                <p class="mb-1">From {coffee.region}</p>
                <Link to={{ pathname:'/details', state: { coffee }}}>Details</Link>
            </div>
          </div>
      ));
    
      return (
        <div>
        &nbsp;&nbsp;&nbsp;
          {this.props.coffees.length ? 
            <table className={`table text-info`}>
              <tbody>
                {coffeeRows}
              </tbody>
            </table>
            :
            <h4 className='text-info'>No Coffee Yet ... </h4>
          }
        </div>
      );
    }
  
  }

export default IndexPage;
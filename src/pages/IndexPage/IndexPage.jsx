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
        <tr key={idx}>
          <td><span className="badge">{idx + 1}</span></td>
          <td>{coffee.name}</td>
          <td>{coffee.region}</td>
          <Link></Link>
        </tr>
      ));
    
      return (
        <div>
          <header className='header-footer'>Rated Coffees</header>
          {this.props.coffees.length ? 
            <table className={`table text-info`}>
              <thead>
                <tr><th width={80}>#</th><th width={100}>Coffees</th><th width={100}>Region</th><th>Seconds</th></tr>
              </thead>
              <tbody>
                {coffeeRows}
              </tbody>
            </table>
            :
            <h4 className='text-info'>No High Scores Yet</h4>
          }
        </div>
      );
    }
  
  }

export default IndexPage;
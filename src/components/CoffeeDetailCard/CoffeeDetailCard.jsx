import React from 'react';
import {Link} from 'react-router-dom';

function CoffeeDetailCard({coffee}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{coffee.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Name</dt>
          <dd>{coffee.name}</dd>
          <dt>Region</dt>
          <dd>{coffee.region}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default CoffeeDetailCard; 

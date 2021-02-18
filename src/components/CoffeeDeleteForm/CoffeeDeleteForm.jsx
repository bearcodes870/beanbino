import React from 'react';

function CoffeeDeleteForm({coffee, handleDeleteCoffee}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>Delete {coffee.name}?</h3>
      </div>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteCoffee(coffee._id)}
        >
          DELETE
        </button>
      </div>
  );
}

export default CoffeeDeleteForm;
import React from 'react';

function CoffeeDeleteForm({coffee, handleDeleteCoffee}) { 
  return (
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteCoffee(coffee._id)}
        >
          DELETE
        </button>
  );
}

export default CoffeeDeleteForm;
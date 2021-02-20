import React from 'react';
import './CoffeeDetailCard.css';

function CoffeeDetailCard({coffee}) { 
  return (
    <div class="card-detail">
        <h2 class="card-header">{coffee.name}'s Profile</h2>
         <div class="card-body">
            <h3 class="card-title">This coffee is from: {coffee.region}</h3>
        </div>
    </div>
  );
}

export default CoffeeDetailCard; 

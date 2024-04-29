
// Ship1.js
import React from 'react';

const Ship1 = ({ cartItems }) => {
  return (
    <div className="ship1-container">
      <h1>Items in Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ship1;

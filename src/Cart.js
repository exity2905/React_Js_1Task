import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index} className="cart-item">
            <span>{product}</span>
            <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

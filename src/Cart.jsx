import React from 'react';

function Cart({ cartItems, onRemove }) {
  return (
    <div className="cart-container">
      <h2 style={{textAlign: 'center'}}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
                <span>
                    <img src={item.image} className="cart-image" />
                </span>
              <span>{item.title}</span>
              <span>Rs. {item.price}</span>
              <button onClick={() => onRemove(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

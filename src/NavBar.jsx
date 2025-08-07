import React from 'react';

function NavBar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Sastika's Market Place</h1>
      <div className="cart" onClick={onCartClick}>
        Cart ({cartCount})
      </div>
    </nav>
  );
}

export default NavBar;

import React from 'react';

function NavBar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Market Place</h1>
      <div className="cart">
        ({cartCount})
      </div>
    </nav>
  );
}

export default NavBar;

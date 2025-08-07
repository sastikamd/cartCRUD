import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // toggle visibility

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert('Item is already in the cart!');
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <NavBar
        cartCount={cart.length}
        onCartClick={() => setShowCart((prev) => !prev)}
      />

      {showCart && (
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      )}

      <ProductList onAddToCart={handleAddToCart} cartItems={cart} />
    </>
  );
}

export default App;

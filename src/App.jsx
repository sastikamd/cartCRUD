import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductList from './ProductList';

function App() {
  const [cart, setCart] = useState([]);

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
      <NavBar cartCount={cart.length} />
      <ProductList
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cartItems={cart}
      />
    </>
  );
}

export default App;

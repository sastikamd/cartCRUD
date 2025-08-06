import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import React from 'react';

function ProductList({ onAddToCart, onRemoveFromCart, cartItems }) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProductsList(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}


export default ProductList;
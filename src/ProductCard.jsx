import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <h3 className="product-price">Price: ${product.price}</h3>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

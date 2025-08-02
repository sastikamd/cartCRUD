import './App.css'
import { useEffect, useState } from 'react';

function App() {
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
    <div>
      {productsList.length > 0 ? (
        productsList.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App

// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { connectToMongoDB } from '../services/mongoService';

interface Product {
  name: string;
  price: number;
  description: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    connectToMongoDB();

    // Fetch product data (this is mock data, you'd usually fetch from your backend here)
    setProducts([
      { name: 'Apple', price: 1.99, description: 'Fresh red apple' },
      { name: 'Banana', price: 0.99, description: 'Yellow ripe banana' },
      { name: 'Orange', price: 1.29, description: 'Juicy orange fruit' },
    ]);
  }, []);

  return (
    <div>
      <h1>Supermarket ERP</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

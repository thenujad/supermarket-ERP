// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
    name: string;
    price: number;
    description: string;
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
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

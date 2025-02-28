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
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
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

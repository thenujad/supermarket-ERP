// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../pages/HomePage.css';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            fetchProducts();
            setNewProduct({ name: '', price: '', description: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="home-container">
            <h1>Supermarket ERP</h1>
            <div className="form-container">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
                    <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
                    <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
                    <button type="submit">Add Product</button>
                </form>
            </div>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onProductUpdate={fetchProducts} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;

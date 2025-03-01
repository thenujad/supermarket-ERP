// src/components/ProductCard.tsx
import React from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<{ product: Product, onProductUpdate: () => void }> = ({ product, onProductUpdate }) => {
    const handleDelete = async () => {
        await fetch(`http://localhost:5000/api/products/${product.id}`, { method: 'DELETE' });
        onProductUpdate();
    };

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ProductCard;

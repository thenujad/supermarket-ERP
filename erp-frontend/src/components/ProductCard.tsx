// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
};

export default ProductCard;

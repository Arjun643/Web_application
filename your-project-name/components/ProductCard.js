// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.title} className="h-32 w-full object-cover mb-4" />
      <div className="text-gray-900 font-bold text-lg mb-2">{product.title}</div>
      <div className="text-gray-700 mb-2">{product.category}</div>
      <div className="text-gray-800 mb-2">${product.price}</div>
      <p className="text-gray-600 text-sm mb-2">{product.description.substring(0, 100)}</p>
      <div className="text-gray-700">
        {product.rating.rate} ({product.rating.count} reviews)
      </div>
    </div>
  );
};

export default ProductCard;

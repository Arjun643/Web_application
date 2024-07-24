// pages/index.js
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from './api/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState('price'); // 'price' or '-price' for ascending or descending

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setProducts(products);
      setSortedProducts(products);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (sortBy === 'price') {
      setSortedProducts([...products].sort((a, b) => a.price - b.price));
    } else if (sortBy === '-price') {
      setSortedProducts([...products].sort((a, b) => b.price - a.price));
    }
  }, [sortBy, products]);

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mt-4">
        <label className="mr-2">Sort by Price:</label>
        <select
          className="border rounded-md p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="price">Low to High</option>
          <option value="-price">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    
    </div>
  );
};

export default Home;

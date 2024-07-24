// utils/api.js
export async function getAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
  }
  
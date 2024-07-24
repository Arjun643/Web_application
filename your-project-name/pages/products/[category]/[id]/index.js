// pages/products/[category]/[id].js
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { category, id } = router.query;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
      <p>Category: {category}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetail;

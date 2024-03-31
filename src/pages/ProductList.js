import React, { useEffect, useState } from 'react';
import { axios } from '../configs/Axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import '../styles/ProductList.css';
import CategoryList from '../components/CategoryList';

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch categories and products data
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get('/categories'),
          axios.get('/products'),
        ]);
        setCategories(categoriesResponse.data.slice(0, 5));
        setProducts(productsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading"> Shop by category</h1>
        <CategoryList categories={categories} />

        <h1 className="heading">Products</h1>
        <div className="product-list">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

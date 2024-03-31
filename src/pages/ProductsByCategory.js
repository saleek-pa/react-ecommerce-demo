import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { axios } from '../configs/Axios';

const ProductsByCategory = () => {
  const { categoryID } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/categories/${categoryID}/products`);
        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryID]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1 className="heading">{products.length > 0 && products[0]?.category?.name}</h1>
      <div className="product-list">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;

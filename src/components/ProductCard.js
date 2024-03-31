import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-item" onClick={() => navigate(`/products/${product.id}`)}>
      <div>
        <img src={product.images[0]} alt={product.title} className="product-image" />
        <p className="product-name">{product.title}</p>
      </div>
      <div className="price-btn">
        <p className="product-price">&#36;{product.price}</p>
        <Button className="add-to-cart-btn">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;

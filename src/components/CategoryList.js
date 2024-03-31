import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-item"
          onClick={() => navigate(`/categories/${category.id}/products`)}
        >
          <img src={category.image} alt={category.name} className="category-image" />
          <p className="category-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

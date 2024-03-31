import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1>ECommerce</h1>
      <button className="users-btn" onClick={() => navigate('/users')}>
        Users
      </button>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1>ECommerce</h1>
      <Button className="users-btn" onClick={() => navigate('/users')}>
        Users
      </Button>
    </div>
  );
};

export default Navbar;

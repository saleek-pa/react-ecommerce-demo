import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;

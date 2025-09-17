// src/components/MenuItem.js
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function MenuItem({ item, addToCart }) {
  const { translations } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div 
      className={`menu-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt={item.title} />
      <div className="menu-item-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="item-footer">
          <span className="price">{item.price}</span>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <i className="fas fa-plus"></i> {translations.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
// src/components/Header.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Header({ cartItems, toggleCart, isCartOpen }) {
  const { language, translations, toggleLanguage } = useLanguage();

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <div className="logo">
          <i className="fas fa-mug-hot"></i>
          <span>Brew Haven</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">{translations.home}</a></li>
          <li><a href="#menu">{translations.menu}</a></li>
          <li><a href="#about">{translations.about}</a></li>
          <li><a href="#contact">{translations.contact}</a></li>
        </ul>
        <div className="cart" onClick={toggleCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cart-icon">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </div>
        <button className="cta-button" onClick={toggleLanguage}>
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
// src/components/FloatingElements.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function FloatingElements() {
  const { translations } = useLanguage();

  return (
    <div className="floating-elements-container">
      <div className="floating-elements">
        <div className="floating float-1">
          <div className="floating-text">{translations.cart}</div>
        </div>
        <div className="floating float-2">
          <div className="floating-text">{translations.menu}</div>
        </div>
        <div className="floating float-3">
          <div className="floating-text">{translations.ourCoffee}</div>
        </div>
        <div className="floating float-4">
          <div className="floating-text">{translations.addToCart}</div>
        </div>
      </div>
    </div>
  );
}

export default FloatingElements;
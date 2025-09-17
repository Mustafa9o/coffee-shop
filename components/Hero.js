// src/components/Hero.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { translations } = useLanguage();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Brew Haven</h1>
        <p>{translations.tagline}</p>
        <button className="cta-button">{translations.orderOnline}</button>
      </div>
    </div>
  );
}

export default Hero;
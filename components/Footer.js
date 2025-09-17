// src/components/Footer.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { translations } = useLanguage();

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Brew Haven Coffee</h3>
          <p>{translations.tagline}</p>
          <p>{translations.address}</p>
        </div>
        <div className="footer-section">
          <h3>{translations.hours}</h3>
          <p>{translations.weekdays}</p>
          <p>{translations.weekends}</p>
        </div>
        <div className="footer-section">
          <h3>{translations.connect}</h3>
          <p>{translations.email}</p>
          <p>{translations.phone}</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{translations.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
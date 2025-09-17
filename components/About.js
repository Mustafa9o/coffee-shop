// src/components/About.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
  const { translations } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>{translations.ourStory}</h2>
          <p>{translations.story1}</p>
          <p>{translations.story2}</p>
          <button className="cta-button">{translations.learnMore}</button>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80" alt="Coffee Shop Interior" />
        </div>
      </div>
    </section>
  );
}

export default About;
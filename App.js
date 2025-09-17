// src/App.js
import React, { useState } from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingElements from './components/FloatingElements';
import CoffeeMenu from './components/CoffeeMenu';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Import the Checkout component

function App() {
  const [cartItems, setCartItems] = useState([]); // Now storing an array of items with quantities
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const proceedToCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  return (
    <LanguageProvider>
      <AppContent 
        cartItems={cartItems} 
        addToCart={addToCart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
        proceedToCheckout={proceedToCheckout}
      />
    </LanguageProvider>
  );
}

function AppContent({ 
  cartItems, 
  addToCart, 
  isCartOpen, 
  toggleCart, 
  showCheckout, 
  setShowCheckout,
  proceedToCheckout 
}) {
  const { language } = useLanguage();
  
  return (
    <div className={`App ${language === 'ar' ? 'rtl' : ''}`}>
      <Header 
        cartItems={cartItems} 
        toggleCart={toggleCart}
        isCartOpen={isCartOpen}
      />
      <Hero />
      <FloatingElements />
      <CoffeeMenu addToCart={addToCart} />
      <About />
      <Footer />
      <Cart 
        cartItems={cartItems} 
        isCartOpen={isCartOpen} 
        toggleCart={toggleCart}
        proceedToCheckout={proceedToCheckout}
      />
      {showCheckout && (
        <Checkout 
          cartItems={cartItems}
          setShowCheckout={setShowCheckout}
        />
      )}
    </div>
  );
}

export default App;
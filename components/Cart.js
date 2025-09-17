// src/components/Cart.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Cart({ cartItems, isCartOpen, toggleCart, proceedToCheckout }) {
  const { translations } = useLanguage();

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>{translations.cart}</h3>
        <button onClick={toggleCart} className="close-cart">&times;</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>{translations.cartEmpty || "Your cart is empty"}</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>{item.price} {item.quantity > 1 && `x${item.quantity}`}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <button className="checkout-button" onClick={proceedToCheckout}>
            {translations.checkout || "Checkout"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
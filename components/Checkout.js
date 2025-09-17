// src/components/Checkout.js
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Checkout({ cartItems, setShowCheckout }) {
  const { translations } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setOrderComplete(false);
  };

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const cleanedValue = value.replace(/\D/g, '');
    // Add a space after every 4 digits
    return cleanedValue.replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    // Remove all non-digit characters
    const cleanedValue = value.replace(/\D/g, '');
    // Add a slash after the first 2 digits
    if (cleanedValue.length <= 2) return cleanedValue;
    return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`;
  };

  if (orderComplete) {
    return (
      <div className="checkout-overlay">
        <div className="checkout-modal">
          <div className="order-success">
            <i className="fas fa-check-circle"></i>
            <h2>{translations.orderSuccess || "Order Successful!"}</h2>
            <p>{translations.orderSuccessMessage || "Thank you for your purchase. Your order has been placed successfully."}</p>
            <button onClick={closeCheckout} className="cta-button">
              {translations.continueShopping || "Continue Shopping"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <div className="checkout-header">
          <h2>{translations.checkout || "Checkout"}</h2>
          <button onClick={closeCheckout} className="close-checkout">&times;</button>
        </div>
        
        <div className="checkout-content">
          <div className="order-summary">
            <h3>{translations.orderSummary || "Order Summary"}</h3>
            <div className="order-items">
              {cartItems.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="order-item-info">
                    <span className="item-name">{item.title}</span>
                    <span className="item-quantity">x{item.quantity}</span>
                  </div>
                  <span className="item-price">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>{translations.total || "Total"}:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="payment-form">
            <h3>{translations.paymentMethod || "Payment Method"}</h3>
            
            <div className="payment-methods">
              <label className={`payment-method ${paymentMethod === 'visa' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  checked={paymentMethod === 'visa'}
                  onChange={() => setPaymentMethod('visa')}
                />
                <i className="fab fa-cc-visa"></i> Visa
              </label>
              
              <label className={`payment-method ${paymentMethod === 'mastercard' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mastercard"
                  checked={paymentMethod === 'mastercard'}
                  onChange={() => setPaymentMethod('mastercard')}
                />
                <i className="fab fa-cc-mastercard"></i> Mastercard
              </label>
            </div>
            
            <div className="form-group">
              <label>{translations.cardNumber || "Card Number"}</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength={19}
                required
              />
            </div>
            
            <div className="form-group">
              <label>{translations.cardName || "Name on Card"}</label>
              <input
                type="text"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>{translations.expiryDate || "Expiry Date"}</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                  maxLength={5}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => {
                    // Only allow numbers
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 3) setCvv(value);
                  }}
                  maxLength={3}
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="checkout-button"
              disabled={isProcessing}
            >
              {isProcessing ? 
                (translations.processing || "Processing...") : 
                (translations.completeOrder || "Complete Order")
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
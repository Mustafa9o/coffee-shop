// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const translations = {
    en: {
      // English translations
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      orderOnline: "Order Online",
      cart: "Cart",
      addToCart: "Add to Cart",
      cartEmpty: "Your cart is empty",
      checkout: "Checkout",
      ourCoffee: "Our Coffee Selection",
      coffeeDesc: "Discover our handcrafted coffee creations made with passion and expertise",
      ourStory: "Our Story",
      story1: "Founded in 2010, Brew Haven began as a small neighborhood coffee shop with a big dream: to serve exceptional coffee while building community.",
      story2: "Today, we continue to source the finest organic beans from sustainable farms around the world, roast them to perfection in-house, and craft each beverage with care and precision.",
      learnMore: "Learn More",
      hours: "Hours",
      weekdays: "Monday - Friday: 7am - 8pm",
      weekends: "Saturday - Sunday: 8am - 9pm",
      connect: "Connect With Us",
      email: "Email: info@brewhaven.com",
      phone: "Phone: (123) 456-7890",
      copyright: "© 2023 Brew Haven Coffee. All rights reserved.",
      address: "123 Coffee Lane, Brewville, CO 12345",
      cartEmpty: "Your cart is empty",
checkout: "Checkout",
orderSummary: "Order Summary",
total: "Total",
paymentMethod: "Payment Method",
cardNumber: "Card Number",
cardName: "Name on Card",
expiryDate: "Expiry Date",
completeOrder: "Complete Order",
processing: "Processing...",
orderSuccess: "Order Successful!",
orderSuccessMessage: "Thank you for your purchase. Your order has been placed successfully.",
continueShopping: "Continue Shopping",
      tagline: "Where every cup tells a story"
    },
    ar: {
        cartEmpty: "عربة التسوق فارغة",
checkout: "الدفع",
orderSummary: "ملخص الطلب",
total: "المجموع",
paymentMethod: "طريقة الدفع",
cardNumber: "رقم البطاقة",
cardName: "الاسم على البطاقة",
expiryDate: "تاريخ الانتهاء",
completeOrder: "إتمام الطلب",
processing: "جاري المعالجة...",
orderSuccess: "تم الطلب بنجاح!",
orderSuccessMessage: "شكراً لشرائك. تم تقديم طلبك بنجاح.",
continueShopping: "متابعة التسوق",
      // Arabic translations
      home: "الرئيسية",
      menu: "القائمة",
      about: "من نحن",
      contact: "اتصل بنا",
      orderOnline: "اطلب عبر الإنترنت",
      cart: "عربة التسوق",
      addToCart: "أضف إلى السلة",
      cartEmpty: "عربة التسوق فارغة",
      checkout: "الدفع",
      ourCoffee: "مختارات القهوة لدينا",
      coffeeDesc: "اكتشف إبداعات القهوة المصنوعة يدويًا بالشغف والخبرة",
      ourStory: "قصتنا",
      story1: "تأسست بريهافن في عام 2010 كمقهى حي صغير يحلم كبير: تقديم قهوة استثنائية مع بناء المجتمع.",
      story2: "اليوم، نواصل الحصول على أفضل حبوب البن العضوية من مزارع مستدامة حول العالم، ونحمصها بدقة في المقهى، ونصنع كل مشروب بعناية ودقة.",
      learnMore: "تعرف على المزيد",
      hours: "ساعات العمل",
      weekdays: "الاثنين - الجمعة: 7 صباحًا - 8 مساءً",
      weekends: "السبت - الأحد: 8 صباحًا - 9 مساءً",
      connect: "تواصل معنا",
      email: "البريد الإلكتروني: info@brewhaven.com",
      phone: "الهاتف: (123) 456-7890",
      copyright: "© 2023 بريهافن للقهوة. جميع الحقوق محفوظة.",
      address: "123 شارع القهوة، بروفيل، كو 12345",
      tagline: "حيث كل فنجان يحكي قصة"
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      translations: translations[language], 
      toggleLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export { LanguageContext };
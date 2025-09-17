// src/components/CoffeeMenu.js
import React from 'react';
import MenuItem from './MenuItem';
import { useLanguage } from '../contexts/LanguageContext';

function CoffeeMenu({ addToCart }) {
  const { translations } = useLanguage();
  
  const menuItems = [
    {
      id: 1,
      title: 'Classic Espresso',
      description: 'Strong and bold, our signature espresso shot is perfect for true coffee lovers.',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    },
    {
      id: 2,
      title: 'Creamy Cappuccino',
      description: 'Perfect balance of espresso, steamed milk, and velvety foam.',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Caramel Latte',
      description: 'Our rich espresso combined with steamed milk and sweet caramel.',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80'
    },
    {
      id: 4,
      title: 'Mocha Delight',
      description: 'Chocolate and coffee - the perfect combination for a sweet treat.',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80'
    },
    {
      id: 5,
      title: 'Iced Americano',
      description: 'Refreshing and bold, perfect for hot summer days.',
      price: '$4.25',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    },
    {
      id: 6,
      title: 'Vanilla Macchiato',
      description: 'A sweet vanilla twist on the classic macchiato.',
      price: '$5.75',
      image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <section className="coffee-menu" id="menu">
      <div className="section-title">
        <h2>{translations.ourCoffee}</h2>
        <p>{translations.coffeeDesc}</p>
      </div>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            addToCart={() => addToCart(item)} // Pass the entire item
          />
        ))}
      </div>
    </section>
  );
}

export default CoffeeMenu;
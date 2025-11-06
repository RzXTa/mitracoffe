import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import Navigation from './components/Navigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
      />

      {/* Page Content */}
      {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'menu' && <MenuPage cart={cart} setCart={setCart} />}
      {currentPage === 'cart' && <CartPage cart={cart} setCart={setCart} />}
    </div>
  );
};

export default App;
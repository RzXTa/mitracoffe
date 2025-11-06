import React from 'react';
import { Home, Menu, ShoppingCart } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, cart }) => {
  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-2 border-amber-200">
      <div className="flex justify-around items-center h-16 max-w-6xl mx-auto">
        <button
          onClick={() => setCurrentPage('landing')}
          className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
            currentPage === 'landing'
              ? 'text-amber-700 bg-amber-50'
              : 'text-amber-600 hover:bg-amber-50'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs font-semibold">Beranda</span>
        </button>

        <button
          onClick={() => setCurrentPage('menu')}
          className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
            currentPage === 'menu'
              ? 'text-amber-700 bg-amber-50'
              : 'text-amber-600 hover:bg-amber-50'
          }`}
        >
          <Menu className="w-6 h-6 mb-1" />
          <span className="text-xs font-semibold">Menu</span>
        </button>

        <button
          onClick={() => setCurrentPage('cart')}
          className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative ${
            currentPage === 'cart'
              ? 'text-amber-700 bg-amber-50'
              : 'text-amber-600 hover:bg-amber-50'
          }`}
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6 mb-1" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </div>
          <span className="text-xs font-semibold">Keranjang</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
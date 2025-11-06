import React, { useState, useEffect } from 'react';
import { Search, Coffee, Plus, Star } from 'lucide-react';
import { allMenuItems } from '../data/menuData';
import { formatCurrency } from '../utils/formatCurrency';

const MenuPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(allMenuItems);

  useEffect(() => {
    let items = allMenuItems;
    
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredItems(items);
  }, [selectedCategory, searchQuery]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const categories = [
    { id: 'all', name: 'Semua Menu', icon: '🍽️' },
    { id: 'makanan', name: 'Makanan', icon: '🍗' },
    { id: 'sup', name: 'Sup & Soto', icon: '🍲' },
    { id: 'minuman', name: 'Minuman', icon: '☕' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-8 px-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Menu MitraCoffee
          </h1>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-700 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-32 z-30 bg-white shadow-md py-4 px-4">
        <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-700 text-white shadow-lg transform scale-105'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <Coffee className="w-20 h-20 text-amber-400 mx-auto mb-4" />
            <p className="text-xl text-amber-700">Menu tidak ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  {item.bestSeller && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Best Seller
                    </div>
                  )}
                  {item.recommended && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Rekomendasi
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">{formatCurrency(item.price)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Tambah
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
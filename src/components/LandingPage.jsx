import React from 'react';
import { Coffee, Clock, MapPin, Phone, ChevronRight, Star } from 'lucide-react';
import { allMenuItems } from '../data/menuData';
import { formatCurrency } from '../utils/formatCurrency';

const LandingPage = ({ setCurrentPage }) => {
  const bestSellers = allMenuItems.filter(item => item.bestSeller).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Coffee className="w-20 h-20 text-amber-200 mb-6 animate-bounce" />
          <h1 className="text-6xl md:text-8xl font-bold text-amber-50 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            MitraCoffee
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-2 italic">
            Pesan Makanan Dan Minuman
          </p>
          <p className="text-lg text-amber-300 mb-12 max-w-2xl">
            {/* TEKS KALAU MAU DI ISI */}
          </p>
          
          <button
            onClick={() => setCurrentPage('menu')}
            className="group bg-amber-200 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            Lihat Menu
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-200 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Menu Favorit
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((item, index) => (
              <div
                key={item.id}
                className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-amber-700">{formatCurrency(item.price)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('menu')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Semua Menu
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 px-4 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
              <p className="text-amber-200">08:00 - 20:00 WIB</p>
              <p className="text-amber-300 text-sm mt-1">Setiap Hari</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Lokasi</h3>
              <p className="text-amber-200 text-sm">Mitra Center, Jalan Langkai River</p>
              <p className="text-amber-200 text-sm">Sagulung, Batam City</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Hubungi Kami</h3>
              <p className="text-amber-200">081372373657</p>
              <p className="text-amber-300 text-sm mt-1">Pre-Order & Pickup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
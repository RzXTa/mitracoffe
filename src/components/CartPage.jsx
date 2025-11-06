import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Phone, Clock, MapPin } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

const CartPage = ({ cart, setCart }) => {
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const sendToWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Mohon isi nama Anda terlebih dahulu');
      return;
    }

    if (cart.length === 0) {
      alert('Keranjang belanja masih kosong');
      return;
    }

    let message = `Halo MitraCoffee, saya ingin pesan:\n\n`;
    message += `Nama: ${customerName}\n\n`;
    message += `Pesanan:\n`;
    
    cart.forEach(item => {
      message += `- ${item.name} (${item.quantity}x) - ${formatCurrency(item.price * item.quantity)}\n`;
    });
    
    message += `\nTotal: ${formatCurrency(calculateTotal())}\n`;
    
    if (notes.trim()) {
      message += `\nCatatan: ${notes}`;
    }

    const whatsappUrl = `https://wa.me/6281372373657?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Keranjang Belanja
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 text-amber-400 mx-auto mb-4" />
            <p className="text-2xl text-amber-700 mb-2">Keranjang Belanja Kosong</p>
            <p className="text-amber-600">Yuk, pesan menu favorit Anda!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-lg text-amber-700">{formatCurrency(item.price)}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-amber-200 hover:bg-amber-300 text-amber-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold text-amber-900 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-amber-200 hover:bg-amber-300 text-amber-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-amber-900">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700 mt-2 text-sm flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Hapus
                  </button>
                </div>
              </div>
            ))}

            {/* Customer Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Informasi Pemesan</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-600 bg-amber-50"
                  />
                </div>

                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Catatan Pesanan</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Pedas sedang, tanpa sayur, dll."
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-600 bg-amber-50"
                  />
                </div>
              </div>
            </div>

            {/* Total & Checkout */}
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-xl shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">Total Pembayaran</span>
                <span className="text-3xl font-bold">{formatCurrency(calculateTotal())}</span>
              </div>

              <div className="bg-amber-700 rounded-lg p-4 mb-6 text-sm">
                <p className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  Jam Operasional: 08:00 - 20:00 WIB
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pickup di: Mitra Center, Jl. Langkai River, Sagulung, Batam
                </p>
              </div>

              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Pesan via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
/**
 * Menu data untuk MitraCoffee
 * 
 * Struktur data:
 * - id: unique identifier
 * - name: nama menu
 * - price: harga dalam Rupiah
 * - category: kategori menu (makanan, sup, minuman)
 * - bestSeller: boolean, true jika menu best seller
 * - recommended: boolean, true jika menu rekomendasi
 * - image: URL gambar (gunakan placeholder atau ganti dengan gambar asli)
 */

export const menuData = {
  makanan: [
    { 
      id: 1, 
      name: 'Ayam Bakar + Nasi', 
      price: 25000, 
      category: 'makanan', 
      bestSeller: true, 
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400' 
    },
    { 
      id: 2, 
      name: 'Ayam Penyet + Nasi', 
      price: 23000, 
      category: 'makanan', 
      bestSeller: true, 
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400' 
    },
    { 
      id: 3, 
      name: 'Ayam Cabe Hijau + Nasi', 
      price: 28000, 
      category: 'makanan', 
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400' 
    },
    { 
      id: 4, 
      name: 'Ayam Cabe Merah + Nasi', 
      price: 28000, 
      category: 'makanan', 
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400' 
    },
  ],
  sup: [
    { 
      id: 5, 
      name: 'Sup Tulang + Nasi', 
      price: 38000, 
      category: 'sup', 
      recommended: true, 
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400' 
    },
    { 
      id: 6, 
      name: 'Soto Ayam + Nasi', 
      price: 15000, 
      category: 'sup', 
      bestSeller: true, 
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400' 
    },
  ],
  minuman: [
    { 
      id: 7, 
      name: 'Kopi Susu', 
      price: 13000, 
      category: 'minuman', 
      bestSeller: true, 
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' 
    },
    { 
      id: 8, 
      name: 'Teh O', 
      price: 5000, 
      category: 'minuman', 
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' 
    },
  ],
};

// Gabungkan semua menu dalam satu array
export const allMenuItems = [
  ...menuData.makanan, 
  ...menuData.sup, 
  ...menuData.minuman
];
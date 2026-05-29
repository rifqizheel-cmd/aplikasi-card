import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OutfitCard from '../components/OutfitCard';
import Footer from '../components/Footer';
import { outfits } from '../data/outfits';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('');
  const [filteredOutfits, setFilteredOutfits] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const kategoris = [...new Set(outfits.map(outfit => outfit.kategori))];

  useEffect(() => {
    let result = outfits;

    if (searchTerm) {
      result = result.filter(outfit =>
        outfit.namaOutfit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        outfit.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        outfit.warna.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedKategori) {
      result = result.filter(outfit => outfit.kategori === selectedKategori);
    }

    setFilteredOutfits(result);
  }, [searchTerm, selectedKategori]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLihatDetail = (outfit) => {
    alert(`Detail Outfit:\n\nNama: ${outfit.namaOutfit}\nKategori: ${outfit.kategori}\nWarna: ${outfit.warna}\nHarga: Rp ${outfit.harga.toLocaleString('id-ID')}\n\n${outfit.deskripsi}`);
  };

  return (
    <div className="home">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedKategori={selectedKategori}
        setSelectedKategori={setSelectedKategori}
        kategoris={kategoris}
      />

      <main className="main-content">
        <div className="hero">
          <h2>Koleksi Fashion Outfit</h2>
          <p>Temukan outfit terbaik untuk setiap kesempatan</p>
        </div>

        {filteredOutfits.length === 0 ? (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <p>Data outfit tidak tersedia</p>
            <span>Coba ubah kata kunci pencarian atau filter kategori</span>
          </div>
        ) : (
          <div className={`outfit-grid ${isVisible ? 'visible' : ''}`}>
            {filteredOutfits.map((outfit, index) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                onLihatDetail={handleLihatDetail}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import OutfitCard from '../components/OutfitCard';
import Footer from '../components/Footer';
import outfits from '../data/outfits.jsx';
import { FaStore } from 'react-icons/fa';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('Semua');

  const kategoris = ['Semua', ...new Set(outfits.map(outfit => outfit.kategori))];

  const filteredOutfits = outfits.filter((outfit) => {
    const matchesSearch = outfit.namaOutfit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      outfit.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKategori = selectedKategori === 'Semua' || outfit.kategori === selectedKategori;
    return matchesSearch && matchesKategori;
  });

  return (
    <div className="home">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="hero-section">
            <h1 className="hero-title">Daftar Fashion Outfit</h1>
            <p className="hero-subtitle">
              Temukan koleksi outfit terbaik untuk gaya kamu
            </p>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedKategori={selectedKategori}
            onKategoriChange={setSelectedKategori}
            kategoris={kategoris.filter(k => k !== 'Semua')}
          />

          {filteredOutfits.length === 0 ? (
            <div className="empty-state">
              <FaStore className="empty-icon" />
              <p className="empty-text">Data outfit tidak tersedia</p>
              <p className="empty-subtext">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          ) : (
            <div className="outfit-grid">
              {filteredOutfits.map((outfit) => (
                <OutfitCard key={outfit.id} outfit={outfit} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
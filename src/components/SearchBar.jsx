import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = ({ searchTerm, onSearchChange, selectedKategori, onKategoriChange, kategoris }) => {
  return (
    <div className="search-filter-container">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Cari outfit favoritmu..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="filter-wrapper">
        <button
          className={`filter-btn ${selectedKategori === 'Semua' ? 'active' : ''}`}
          onClick={() => onKategoriChange('Semua')}
        >
          Semua
        </button>
        {kategoris.map((kategori) => (
          <button
            key={kategori}
            className={`filter-btn ${selectedKategori === kategori ? 'active' : ''}`}
            onClick={() => onKategoriChange(kategori)}
          >
            {kategori}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
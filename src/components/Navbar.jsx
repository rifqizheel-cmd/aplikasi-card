import SearchBar from './SearchBar';

function Navbar({ searchTerm, setSearchTerm, selectedKategori, setSelectedKategori, kategoris }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Fashion Outfit</h1>
          <span>Daftar Koleksi Fashion</span>
        </div>
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <div className="filter-kategori">
          <select 
            value={selectedKategori} 
            onChange={(e) => setSelectedKategori(e.target.value)}
            className="kategori-select"
          >
            <option value="">Semua Kategori</option>
            {kategoris.map((kat) => (
              <option key={kat} value={kat}>{kat}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
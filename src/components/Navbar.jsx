import { FaStore } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaStore className="logo-icon" />
          <span>Fashion Outfit</span>
        </div>
        <div className="navbar-brand">
          <span className="brand-text">Koleksi Terlengkap</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
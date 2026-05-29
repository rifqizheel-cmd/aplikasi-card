import { FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaClipboardList className="logo-icon" />
          <span>To-Do List</span>
        </div>
        <div className="navbar-brand">
          <span className="brand-text">Catatan Tugas</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

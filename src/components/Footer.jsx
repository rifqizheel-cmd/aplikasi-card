import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Made with <FaHeart className="heart-icon" /> using React + Vite
        </p>
        <p className="footer-year">2026</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart2, MapPin, CloudRain, Database } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <BarChart2 className="navbar-logo" />
          <span>U.S Accidents</span>
        </Link>

        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Carto" className="nav-link" onClick={closeMenu}>
                <MapPin size={20} />
                <span>Cartographie</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Weather" className="nav-link" onClick={closeMenu}>
                <CloudRain size={20} />
                <span>Weather Metrics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DataEX" className="nav-link" onClick={closeMenu}>
                <Database size={20} />
                <span>Data Exploration</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DataVIS" className="nav-link" onClick={closeMenu}>
                <BarChart2 size={20} />
                <span>Data Visualization</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
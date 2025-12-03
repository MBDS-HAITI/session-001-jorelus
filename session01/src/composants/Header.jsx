import { useState } from 'react';
import { menuItems } from '../config/menuConfig';
import './Header.css';

export default function Header({ onMenuChange, activeMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (menuId) => {
    onMenuChange(menuId);
    setIsMenuOpen(false);
  };

  return (
    <header className="Header">
      <div className="header-container">
        <div className="brand">
          <img src="/logoMBDS.png" alt="Logo MBDS" className="logo" />
          <div className="brand-text">
            <h1 className="title">Gestion Académique</h1>
            <p className="subtitle">Plateforme de Gestion des Données</p>
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                  style={{
                    '--color': item.color
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-description">{item.description}</span>
                  </span>
                  <span className="nav-arrow">→</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
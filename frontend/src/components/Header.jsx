import React from 'react';
import RamLogo from '../assets/RamLogo.png';
import LogoColegio from '../assets/LogoColegio.png';
import '../estilos/Header.css'; // Archivo CSS para estilos

const Header = ({ onLogoClick }) => {
  return (
    <header className="header">
      <a onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <img src={RamLogo} className="logo" alt="Proyecto RAM logo" />
      </a>
      <h1 className="header-title">Proyecto RAM</h1>
      <a>
        <img src={LogoColegio} className="logo" alt="Logo del colegio" />
      </a>
    </header>
  );
};

export default Header;

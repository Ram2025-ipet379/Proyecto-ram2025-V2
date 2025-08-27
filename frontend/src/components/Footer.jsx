import React from 'react';
import RamLogo from '../assets/RamLogo.png';
import '../estilos/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={RamLogo} className="footer-logo" alt="Proyecto RAM logo" />
      <p>© 2025 Proyecto RAM. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

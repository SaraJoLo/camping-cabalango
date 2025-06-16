import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import campingImg from '../../assets/icons/logo_color.png';
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="headerBox">
      <div className="logoBox">
        <Link to="/" className="logo">
          <img src={campingImg} alt="Vista del camping Cabalango" />
         </Link>
      </div>

      <button 
        className="menuButton" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className='hamburgerMenu'></span>
        <span className='hamburgerMenu'></span>
        <span className='hamburgerMenu'></span>
      </button>

      <div>
        <ul className={`navBar ${isMenuOpen ? 'active' : ''}`}>
          <li className="navOp"><Link to="/">Inicio</Link></li>
          <li className="navOp"><Link to="/origen">Origen</Link></li>
          <li className="navOp"><Link to="/alojar">Aloamiento</Link></li>
          <li className="navOp"><Link to="/servicios">Servicios</Link></li>
          <li className="navOp"><Link to="/info">INFO</Link></li>
          <li className="navOp"><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </section>
  );
}

export default Header;

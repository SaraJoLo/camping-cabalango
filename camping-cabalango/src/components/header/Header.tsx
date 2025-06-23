import { useState } from 'react';
import { Link } from 'react-router-dom';
import campingImg from '../../assets/icons/logo_color.png';
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
        aria-label="Menú"
      >
        <span className="hamburgerMenu"></span>
        <span className="hamburgerMenu"></span>
        <span className="hamburgerMenu"></span>
      </button>

      <ul className={`navBar ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navOp" onClick={handleLinkClick}>Inicio</Link></li>
        <li><Link to="/origen" className="navOp" onClick={handleLinkClick}>Origen</Link></li>
        <li><Link to="/alojar" className="navOp" onClick={handleLinkClick}>Alojamiento</Link></li>
        <li><Link to="/servicios" className="navOp" onClick={handleLinkClick}>Servicios</Link></li>
        <li><Link to="/contacto" className="navOp" onClick={handleLinkClick}>Contacto</Link></li>
      </ul>
    </section>
  );
}

export default Header;

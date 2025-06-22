import React from 'react';
import { Link } from 'react-router-dom';
import campingLogo from '../../assets/icons/logo_marron.png';
import './footer.scss';
import { FaWhatsapp, FaEnvelope, FaHeart, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerSection footerLeft">
        <img src={campingLogo} alt="Logo Cabalgando" className="footerLogo" />
        <ul>
          <li className="navOp"><Link to="/legal">Avisos Legales</Link></li>
          <li className="navOp"><Link to="/terminoscondiciones">Terminos y Condiciones</Link></li>
        </ul>
      </div>

      <div className="footerSection footerCenter">
        <p>Contactanos | Preferentemente por WhatsApp</p>
        <div className="footerIcons">
          <a href="https://wa.me/5493541548342" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footerSection footerRight">
        <p>Seguinos en nuestras redes para ver la experiencia!</p>
        <div className="footerIcons">
          <FaHeart />
          <a href="https://www.instagram.com/campingcabalango" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/campingcabalango" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <FaHeart />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

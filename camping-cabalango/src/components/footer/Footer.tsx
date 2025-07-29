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
          <li className="navOp"><Link to="/terminoscondiciones">Términos y Condiciones</Link></li>
        </ul>
      </div>

      <div className="footerSection footerCenter">
        <p>Contáctanos | Preferentemente por WhatsApp</p>
        <ul className="footerIcons">
          <li>
            <a href="https://wa.me/5493541548342" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp  size={30} />
            </a>
          </li>
          <li>
            <a href="mailto:info@tusitio.com" aria-label="Correo electrónico">
              <FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footerSection footerRight">
        <p>Seguinos en nuestras redes para ver la experiencia!</p>
        <ul className="footerIcons">
          <li><FaHeart size={30}/></li>
          <li>
            <a href="https://www.instagram.com/campingcabalango" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30}/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/campingcabalango" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={30} />
            </a>
          </li>
          <li><FaHeart size={30}/></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

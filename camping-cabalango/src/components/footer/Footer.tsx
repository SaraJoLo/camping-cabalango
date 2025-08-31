import React from "react";
import { Link, useNavigate } from "react-router-dom";
import campingLogo from "../../assets/icons/logo_marron.png";
import "./footer.scss";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaMapMarked,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <footer className="footer">
      <div className="footerSection footerLeft">
        <a
          href="/"
          onClick={handleLogoClick}
          aria-label="Ir al inicio de la página"
        >
          <img
            src={campingLogo}
            alt="Logo Camping Cabalango"
            className="footerLogo"
          />
        </a>

        <ul>
          <li className="navOp">
            <Link to="/legal">Avisos Legales</Link>
          </li>
          <li className="navOp">
            <Link to="/terminoscondiciones">Términos y Condiciones</Link>
          </li>
        </ul>
      </div>

      <div className="footerSection footerCenter">
        <p>Contáctanos | Preferentemente por WhatsApp</p>
        <ul className="footerIcons">
          <li>
            <a
              href="https://wa.me/5493541548342"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </li>
          <li>
            <a href="mailto:info@tusitio.com" aria-label="Correo electrónico">
              <FaEnvelope size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/phnRhdwEHN8p3qqF9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ubicación"
            >
              <FaMapMarked size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footerSection footerRight">
        <p>Seguinos en nuestras redes para ver la experiencia!</p>
        <ul className="footerIcons">
          <li>
            <a
              href="https://www.instagram.com/campingcabalango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/campingcabalango"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

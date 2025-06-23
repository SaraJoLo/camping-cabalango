import React, { useState } from 'react';
import './contacto.scss';
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const generateWhatsAppLink = (phone: string, reason: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hola, me gustaría obtener información sobre "${reason}" en el Camping Cabalango. Muchas gracias!`
  )}`;

const whatsappNumber = '5493541548342';
const Contacto: React.FC = () => {
  const [reason, setReason] = useState('Reservar cabaña');
  const navigate = useNavigate();

  return (
    <div className="contacto-page">
        <button className="volverBtn" onClick={() => navigate('/')}>
              <FaArrowLeft />
              <p>Volver</p>
            </button>
      <h1>Contacto</h1>

      <section className="info-section">
        <div className="info-item">
          <FaMapMarkerAlt />
          <span>Ruta s/n, Cabalango, Córdoba</span>
        </div>
        <div className="info-item">
          <FaPhoneAlt />
          <span>+54 93541 548342</span>
        </div>
        <div className="info-item">
          <FaEnvelope />
          <span>contacto@campingcabalango.com</span>
        </div>
      </section>

      <section className="whatsapp-section">
        <label htmlFor="reason">Seleccione el motivo del contacto: </label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option>Reservar cabaña</option>
          <option>Reservar casilla</option>
          <option>Campamentos</option>
          <option>Información</option>
        </select>

        <a
          className="whatsapp-button"
          href={generateWhatsAppLink(whatsappNumber, reason)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
          Enviar mensaje por WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Contacto;

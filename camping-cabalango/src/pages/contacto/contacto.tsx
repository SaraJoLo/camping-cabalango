import React, { useState } from 'react';
import './contacto.scss';
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type ContactReason = 'Reservar cabaña' | 'Reservar casilla' | 'Campamentos' | 'Información';

const REASON_PHONE_MAP: Record<ContactReason, string> = {
  'Reservar cabaña': '5493541743134',
  'Reservar casilla': '5493541743134',
  'Campamentos': '5493541548342',
  'Información': '5493541548342',
};

const getPhoneForReason = (reason: ContactReason): string => REASON_PHONE_MAP[reason];

const generateWhatsAppLink = (phone: string, reason: string): string =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hola, me gustaría obtener información sobre "${reason}" en el Camping Cabalango. Muchas gracias!`
  )}`;

const Contacto: React.FC = () => {
  const [reason, setReason] = useState<ContactReason>('Reservar cabaña');
  const navigate = useNavigate();

  const selectedPhone = getPhoneForReason(reason);
  const whatsappLink = generateWhatsAppLink(selectedPhone, reason);

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
          <span>+54 9 {selectedPhone.slice(2, 6)} {selectedPhone.slice(6)}</span>
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
          onChange={(e) => setReason(e.target.value as ContactReason)}
        >
          {Object.keys(REASON_PHONE_MAP).map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        <a
          className="whatsapp-button"
          href={whatsappLink}
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

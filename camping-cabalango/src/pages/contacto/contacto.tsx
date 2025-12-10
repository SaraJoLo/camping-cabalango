import React, { useState } from "react";
import "./contacto.scss";
import BtnBack from "../../components/btnback/btnback";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

type ContactReason =
  | "Cabañas"
  | "Casillas"
  | "Campamentos"
  | "Información general";

const REASONS: ContactReason[] = [
  "Cabañas",
  "Casillas",
  "Campamentos",
  "Información general",
];

const PHONE_BY_REASON: Record<ContactReason, string> = {
  Cabañas: "5493517683140",
  Casillas: "5493517683140", // mismo teléfono hasta que confirmes si cambia
  Campamentos: "5493541548342",
  "Información general": "5493541548342",
};

const getPhoneForReason = (reason: ContactReason): string =>
  PHONE_BY_REASON[reason];

const generateWhatsAppLink = (
  phone: string,
  reason: string,
  username: string
): string =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hola! Mi nombre es ${username}. Quisiera consultar sobre "${reason}" en el Camping Cabalango. Muchas gracias!`
  )}`;

const Contacto: React.FC = () => {
  const [reason, setReason] = useState<ContactReason>("Campamentos");
  const [username, setUsername] = useState<string>("");

  const selectedPhone = getPhoneForReason(reason);
  const whatsappLink = generateWhatsAppLink(selectedPhone, reason, username);

  return (
    <div className="contacto-page">
      <BtnBack />

      <h1>Contacto</h1>

      {/* DESCRIPCIÓN BREVE */}
      <p
        style={{
          maxWidth: "600px",
          marginBottom: "2rem",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        Atendemos consultas todos los días de <strong>9 a 20 h</strong>. Elegí un
        motivo y comunicate directamente por WhatsApp o por teléfono. Estamos
        para ayudarte.
      </p>

      {/* INFORMACIÓN GENERAL */}
      <section className="info-section" aria-label="Información del camping">
        <div className="info-item">
          <FaMapMarkerAlt />
          <span>Ruta s/n, Cabalango, Córdoba</span>
        </div>

        <div className="info-item">
          <FaPhoneAlt />
          <span>
            +54 9 {selectedPhone.slice(2, 6)} {selectedPhone.slice(6)}
          </span>
        </div>

        <div className="info-item">
          <FaEnvelope />
          <span>contacto@campingcabalango.com</span>
        </div>

        {/* BOTÓN DE LLAMADA DIRECTA */}
        <a
          href="tel:+5493541548342"
          className="whatsapp-button"
          style={{ background: "#0d3d91" }}
        >
          <FaPhoneAlt />
          Llamar Administración
        </a>
      </section>

      {/* FORMULARIO WHATSAPP */}
      <section className="whatsapp-section">
        {/* NOMBRE DEL USUARIO */}
        <label htmlFor="username">Tu nombre:</label>
        <input
          id="username"
          type="text"
          placeholder="Ingresá tu nombre"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "0.6rem 1rem",
            fontSize: "1rem",
            width: "100%",
            borderRadius: "8px",
            border: "1.5px solid #ccc",
            marginBottom: "1rem",
          }}
        />

        {/* MOTIVO */}
        <label htmlFor="reason">Motivo del contacto:</label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value as ContactReason)}
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        {/* BOTÓN WHATSAPP */}
        <a
          className="whatsapp-button"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
          Enviar WhatsApp
        </a>
      </section>

      <section
        style={{
          width: "100%",
          maxWidth: "600px",
          marginBottom: "4rem",
        }}
      >
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Cómo llegar</h2>

        <iframe
          title="Mapa Camping Cabalango"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.085460273875!2d-64.5531739!3d-31.4012293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f66e4ea79ad%3A0xbbd8dd0b2de2ac4f!2sCamping%20Cabalango!5e0!3m2!1ses-419!2sar!4v1707423400000!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          loading="lazy"
          style={{
            borderRadius: "12px",
            border: "0",
          }}
        ></iframe>
      </section>
    </div>
  );
};

export default Contacto;

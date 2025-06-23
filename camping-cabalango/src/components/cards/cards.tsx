// src/components/servicios/ServiciosCards.tsx
import React from 'react';
import './cards.scss';
import Img1 from '../../assets/img/camping/salon/hori2.jpg';
import Img2 from '../../assets/img/alojar/campa/albergue2/IMG_9388.jpg';
import Img3 from '../../assets/img/camping/entrar.png';

interface Servicio {
  id: number;
  title: string;
  borderColor: string;
  imgSrc: string;
  items: string[];
}

const serviciosData: Servicio[] = [
  {
    id: 1,
    title: 'Para pasar el día',
    borderColor: 'rgba(230, 178, 92, 0.55)',
    imgSrc: Img1,
    items: [
      '🏵Mesas, sillas, bancos y asadores',
      '🏵Río con ollas y playa',
      '🏵Proveeduría',
      '🏵Baños con duchas',
      '🏵Estacionamiento',
    ],
  },
  {
    id: 2,
    title: 'Actividades recreativas',
    borderColor: 'rgba(195, 194, 123, 0.55)',
    imgSrc: Img2,
    items: [
      '🏵 Albergue de montaña p/ 80 personas',
      '🏵 Cocina industrial equipada',
      '🏵 Actividades recreativas',
      '🏵 Baños con agua caliente',
      '🏵 Zona de acampar con mesas y parrillas',
    ],
  },
  {
    id: 3,
    title: 'Eventos',
    borderColor: 'rgba(236, 115, 115, 0.55)',
    imgSrc: Img3,
    items: [
      '🏵Casamientos',
      '🏵Cumpleaños',
      '🏵Salón de eventos (200 personas)',
      '🏵Talleres',
      '🏵Encuentros',
    ],
  },
];

const ServiciosCards: React.FC = () => {
  return (
    <section className="servicios-cards">
      <h3 className="title">¿Qué ofrecemos?</h3>
      <div className="cards-container">
        {serviciosData.map((s) => (
          <div key={s.id} className="card" style={{ borderColor: s.borderColor }}>
            <div className="img-wrapper">
              <img src={s.imgSrc} alt={s.title} />
              <h2>{s.title}</h2>
            </div>
            <div className="card-content">
              <ul>
                {s.items.map((itm, i) => (
                  <li key={i}>{itm}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosCards;

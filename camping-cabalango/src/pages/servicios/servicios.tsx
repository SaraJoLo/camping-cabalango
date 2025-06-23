import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './servicios.scss';
import CarouselModal from '../../components/carrousel/carrousel.tsx';
import { FaArrowLeft } from 'react-icons/fa';
import Img1 from '../../assets/img/camping/salon/112.jpg';
import Img2 from '../../assets/img/actividades/324324234324.jpg';
import Img3 from '../../assets/img/servicios/eventos/54.jpg';

interface Servicio {
  id: number;
  title: string;
  borderColor: string;
  imgSrc: string;
  items: string[];
  category: string;
}

const serviciosData: Servicio[] = [
  {
    id: 1,
    title: 'Pasar el día',
    borderColor: 'rgba(230, 178, 92, 0.55)',
    imgSrc: Img1,
    items: ['🏵 Mesas, sillas, bancos', '🏵 Río con ollas y playa', '🏵 Proveeduría (temporada)', '🏵 Duchas con agua caliente', '🏵 Asadores con parrilla'],
    category: 'pasar-dia',
  },
  {
    id: 2,
    title: 'Actividades recreativas',
    borderColor: 'rgba(195, 194, 123, 0.55)',
    imgSrc: Img2,
    items: ['🏵 Trekking', '🏵 Cabalgatas', '🏵 Escalada', '🏵 Cancha de Voley', '🏵 Juegos para infancias'],
    category: 'actividades',
  },
  {
    id: 3,
    title: 'Eventos',
    borderColor: 'rgba(236, 115, 115, 0.55)',
    imgSrc: Img3,
    items: ['🏵 Casamientos', '🏵 Cumpleaños', '🏵 Salón de eventos (200 personas)', '🏵 Talleres', '🏵 Encuentros'],
    category: 'eventos',
  },
];

const Servicios: React.FC = () => {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleBack = () => navigate('/');
  const handleOpen = (cat: string) =>
    setOpenCategory(openCategory === cat ? null : cat);

  return (
    <div className="servicios-page">
      <button className="back-btn" onClick={handleBack}>
        <FaArrowLeft /> Volver
      </button>

      <h1>Servicios</h1>

      <section className="cards-container">
        {serviciosData.map((s) => (
          <div
            key={s.id}
            className="card"
            style={{ borderColor: s.borderColor }}
          >
            <div className="img-wrapper">
              <img src={s.imgSrc} alt={s.title} />
              <h2>{s.title}</h2>
            </div>

            <div className="card-content">
              <p className="subtitle">¿Qué ofrecemos?</p>
              <ul>
                {s.items.map((itm, i) => (
                  <li key={i}>{itm}</li>
                ))}
              </ul>
              <button
                className="img-btn"
                onClick={() => handleOpen(s.category)}
              >
                Ver imágenes
              </button>
            </div>
          </div>
        ))}
      </section>

      {openCategory && (
        <CarouselModal
          category={openCategory}
          onClose={() => setOpenCategory(null)}
        />
      )}
    </div>
  );
};

export default Servicios;

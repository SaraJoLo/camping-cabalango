import './home.scss';
import { GiBarbecue } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faPaw,
  faRoute,
  faRecycle,
  faUtensils,
  faCampground,
  faPersonSwimming,
  faTableTennisPaddleBall,
  faHotel,
  faPersonHiking,
} from '@fortawesome/free-solid-svg-icons';
import { PiTree } from 'react-icons/pi';
import Map from '../../components/map/map';
import Weather from '../../components/weather/weather';
import InstagramFeed from '../../components/instagram/instagram-feed';
import ImageCarousel from '../../components/imagecarousel/imagecarousel';
import Cards from '../../components/cards/cards';

const amenities = [
  { icon: <FontAwesomeIcon icon={faRecycle} />, label: "Sostenibilidad y reciclaje" },
  { icon: <FontAwesomeIcon icon={faWifi} />, label: "Zona Wi-Fi" },
  { icon: <FontAwesomeIcon icon={faCampground} />, label: "Espacio para acampar" },
  { icon: <FontAwesomeIcon icon={faRoute} />, label: "A 15 min. de Villa Carlos Paz" },
  { icon: <FontAwesomeIcon icon={faUtensils} />, label: "Mesas, sillas y bancos" },
  { icon: <FontAwesomeIcon icon={faPaw} />, label: "Admite mascotas (con correa)" },
  { icon: <GiBarbecue />, label: "Asadores con parrilla" },
  { icon: <PiTree />, label: "Áreas verdes y sombra" },
  { icon: <FontAwesomeIcon icon={faPersonSwimming} />, label: "Río con ollas y playa" },
  { icon: <FontAwesomeIcon icon={faTableTennisPaddleBall} />, label: "Pool, metegol y ping-pong" },
  { icon: <FontAwesomeIcon icon={faHotel} />, label: "Albergue de montaña" },
  { icon: <FontAwesomeIcon icon={faPersonHiking} />, label: "Actividades recreativas" },
];

const Home = () => {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-video-container">
          <video
            className="home__hero-video"
            src={`${import.meta.env.BASE_URL}RioDroneChicas.mp4`}
            autoPlay
            loop
            muted
          />
          <div className="home__hero-overlay"></div>
        </div>
        <div className="home__hero-content">
          <h1>Camping Cabalango</h1>
          <p>El lugar ideal para recargar energías y disfrutar en la naturaleza</p>
          <a href="tel:+54 9 3541 54-8342">3541 54-8342</a>
        </div>
      </section>

      <section className="home__services">
        <h2 className="home__services-title">Servicios</h2>
        <div className="home__services-grid">
          {amenities.map((item, index) => (
            <div className="home__services-item" key={index}>
              <div className="home__services-item-icon">{item.icon}</div>
              <span className="home__services-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home__location">
        <h2 className="home__location-title">¿Cómo llegar?</h2>
        <div className="home__location-content">
          <div className="home__location-map">
            <Map />
            <p>A 40 minutos de Córdoba Capital (Colectivo directo desde la Terminal de Omnibus de Córdoba) y 15' desde Villa Carlos Paz.</p>
          </div>
          <div className="home__location-weather">
            <Weather />
          </div>
        </div>
      </section>

      <section className="home__instagram">
        <h2 className="home__instagram-title">Viví el camping a través de Instagram</h2>
        <InstagramFeed />
      </section>

      <section className="home__cards">
        <Cards />
      </section>

      <section className="home__carousel">
        <ImageCarousel />
      </section>
    </main>
  );
};

export default Home;

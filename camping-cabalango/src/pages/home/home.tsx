import './home.scss';
import campingImg from '../../assets/img/camping/1111.jpg';
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
  { icon: <PiTree/>, label : "Áreas verdes y sombra" },
  { icon: <FontAwesomeIcon icon={faPersonSwimming} />, label: "Río con ollas y playa" },
  { icon: <FontAwesomeIcon icon={faTableTennisPaddleBall} />, label: "Pool, metegol y ping-pong" },
  { icon: <FontAwesomeIcon icon={faHotel} />, label: "Albergue de montaña" },
  { icon: <FontAwesomeIcon icon={faPersonHiking} />, label: "Actividades recreativas" },
];



const Home = () => {
  return (
    <section className="home">
      <section className="home__hero">
         <div className="home__content">
          <h1>Camping Cabalango</h1>
          <p className="subtitle">
            El lugar ideal para recargar energías y disfrutar en la naturaleza
          </p>
          <a href="tel:+54 9 3541 54-8342" className="home__btn">3541 54-8342</a>
        </div>
        <div className="home__image">
          <img src={campingImg} alt="Vista del camping Cabalango" />
        </div>
      </section>
      <section className="services">
          <div className="icon-section">
            <h3>SERVICIOS</h3>
            <div className="amenities-grid">
              
             {amenities.map((item, index) => (
                <div className="amenity-item" key={index}>
                  <div className="amenity-icon">{item.icon}</div>
                  <span className="amenity-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
      </section>
      <section className="location-info">
    <h3> ¿CÓMO LLEGAR?</h3>
  <div className="location-content">
    <div className="location-map">
      <Map />
      <p> A 40 minutos de Córdoba Capital (Colectivo directo desde la Terminal de Omnibus de Córdoba) y 15' desde Villa Carlos Paz.</p>
    </div>
    <div className="location-weather">
      <Weather />
      </div>
     </div>
   </section>
    <h3 className='instagram-title'>Viví el camping a través de Instagram</h3>
   <section className="instagram-section">
      <InstagramFeed />
    </section>
    <section className="cards-section">
    <Cards />
    </section>
    <section className="carousel-section">
    <ImageCarousel />
    </section>
  </section>
  );
};

export default Home;
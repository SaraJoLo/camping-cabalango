import './home.scss';
import campingImg from '../../assets/img/camping/1111.jpg';
import { GiBarbecue } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faPaw,
  faCar,
  faRecycle,
  faUtensils,
  faCampground,
  faPersonSwimming,
  faStar,
  faHotel,
  faPersonHiking,
} from '@fortawesome/free-solid-svg-icons';
import { PiTree } from 'react-icons/pi';
import Map from '../../components/map/map';
import Weather from '../../components/weather/weather';
import InstagramFeed from '../../components/instagram/instagram-feed';

const amenities = [
  { icon: <FontAwesomeIcon icon={faRecycle} />, label: "Sostenibilidad y reciclaje" },
  { icon: <FontAwesomeIcon icon={faWifi} />, label: "Wi-Fi" },
  { icon: <FontAwesomeIcon icon={faCar} />, label: "Estacionamiento" },
  { icon: <FontAwesomeIcon icon={faPaw} />, label: "Admite mascotas (con correa)" },
  { icon: <GiBarbecue />, label: "Zona de barbacoa" },
  { icon: <FontAwesomeIcon icon={faUtensils} />, label: "Mesas, sillas y bancos" },
  { icon: <FontAwesomeIcon icon={faCampground} />, label: "Espacio para acampar" },
  { icon: <PiTree/>, label : "Áreas verdes y sombra" },
  { icon: <FontAwesomeIcon icon={faPersonSwimming} />, label: "Río con ollas y playa" },
  { icon: <FontAwesomeIcon icon={faStar} />, label: "Luz de noche" },
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
  <div className="location-content">
    <h3> ¿CÓMO LLEGAR?</h3>
    <div className="location-map">
      <Map />
      <p> A 40 minutos de Villa Carlos Paz. Colectivo directo desde la Terminal de Omnibus de Córdoba.</p>
    </div>
    <div className="location-weather">
      <Weather />
      </div>
     </div>
   </section>
   <section className="instagram-section">
    <h3 className='instagram-title'>Viví el camping a través de Instagram</h3>
      <InstagramFeed /> 
    </section>
  </section>
  );
};

export default Home;
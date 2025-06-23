import React from 'react';
import './carrousel.scss';
import Img1 from '../../assets/img/camping/00.jpg';
import Img2 from '../../assets/img/camping/1111.jpg';
import Img3 from '../../assets/img/camping/67867.jpg';
import Img4 from '../../assets/img/camping/carpa2.jpg';

import Act1 from '../../assets/img/camping/7567.jpg';
import Act2 from '../../assets/img/actividades/333.jpg';
import Act3 from '../../assets/img/actividades/333232.jpg';
import Act4 from '../../assets/img/actividades/3243242.jpg';
import Act5 from '../../assets/img/actividades/324324234324.jpg';

import Eve1 from '../../assets/img/servicios/eventos/324.jpg';
import Eve2 from '../../assets/img/servicios/eventos/345.jpg';
import Eve3 from '../../assets/img/servicios/eventos/77.jpg';
import Eve4 from '../../assets/img/servicios/eventos/8978.jpg';
import Eve5 from '../../assets/img/servicios/eventos/evento.jpg';


interface Props {
  category: string;
  onClose: () => void;
}

const imagesByCategory: Record<string, string[]> = {
  'pasar-dia': [Img1, Img2, Img3, Img4],
  actividades: [Act1, Act2, Act3, Act4, Act5],
  eventos: [Eve1, Eve2, Eve3, Eve4, Eve5],
};

const CarouselModal: React.FC<Props> = ({ category, onClose }) => {
  const imgs = imagesByCategory[category] || [];
  return (
    <div className="carousel-modal">
      <div className="overlay" onClick={onClose} />
      <div className="carousel-content">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="images">
          {imgs.map((src, idx) => (
            <img key={idx} src={src} alt={`${category} ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;

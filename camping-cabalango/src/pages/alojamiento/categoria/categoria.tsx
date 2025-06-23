import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './categoria.scss';
import { FaArrowLeft } from 'react-icons/fa';

import ImgCabUno1 from '../../../assets/img/alojar/cabañas/uno/20230216_115034720.jpg';
import ImgCabUno2 from '../../../assets/img/alojar/cabañas/uno/IMG_0513.jpg';
import ImgCabUno3 from '../../../assets/img/alojar/cabañas/uno/IMG_0515.jpg';
import ImgCabUno4 from '../../../assets/img/alojar/cabañas/uno/IMG_0516.jpg';

import ImgCabDos1 from '../../../assets/img/alojar/cabañas/dos/20230216_114343002.jpg';
import ImgCabDos2 from '../../../assets/img/alojar/cabañas/dos/20230216_114503092.jpg';
import ImgCabDos3 from '../../../assets/img/alojar/cabañas/dos/cabanaa1.jpg';
import ImgCabDos4 from '../../../assets/img/alojar/cabañas/dos/extracab1.jpg';
import ImgCabDos5 from '../../../assets/img/alojar/cabañas/dos/extracab27.jpg';

import ImgPepe1 from '../../../assets/img/alojar/cabañas/pepe/casapepe1.jpg';
import ImgPepe2 from '../../../assets/img/alojar/cabañas/pepe/casapepe2.jpg';
import ImgPepe3 from '../../../assets/img/alojar/cabañas/pepe/casapepe3.jpg';
import ImgPepe4 from '../../../assets/img/alojar/cabañas/pepe/casapepe4.jpg';
import ImgPepe5 from '../../../assets/img/alojar/cabañas/pepe/casapepe5.jpg';

import CampaUno1 from '../../../assets/img/alojar/campa/albergue1/IMG_9364.jpg';
import CampaUno2 from '../../../assets/img/alojar/campa/albergue1/IMG_9366.jpg';
import CampaUno3 from '../../../assets/img/alojar/campa/albergue1/IMG_9367.jpg';
import CampaUno4 from '../../../assets/img/alojar/campa/albergue1/IMG_9368.jpg';
import CampaUno5 from '../../../assets/img/alojar/campa/albergue1/IMG_9371.jpg';
import CampaUno6 from '../../../assets/img/alojar/campa/albergue1/IMG_9375.jpg';
import CampaUno7 from '../../../assets/img/alojar/campa/albergue1/IMG_9377.jpg';

import CampaDos1 from '../../../assets/img/alojar/campa/albergue2/IMG_9384.jpg';
import CampaDos2 from '../../../assets/img/alojar/campa/albergue2/IMG_9385.jpg';
import CampaDos3 from '../../../assets/img/alojar/campa/albergue2/IMG_9388.jpg';
import CampaDos4 from '../../../assets/img/alojar/campa/albergue2/IMG_9390.jpg';
import CampaDos5 from '../../../assets/img/alojar/campa/albergue2/IMG_9393.jpg';
import CampaDos6 from '../../../assets/img/alojar/campa/albergue2/IMG_9394.jpg';
import CampaDos7 from '../../../assets/img/alojar/campa/albergue2/IMG_9400.jpg';
import CampaDos8 from '../../../assets/img/alojar/campa/albergue2/IMG_9402.jpg';
import CampaDos9 from '../../../assets/img/alojar/campa/albergue2/IMG_9404.jpg';

import Carpa1 from '../../../assets/img/alojar/carpas/carpa1.jpg';
import Carpa2 from '../../../assets/img/alojar/carpas/carpa3.jpg';
import Carpa3 from '../../../assets/img/alojar/carpas/carpa7.jpg';
import Carpa4 from '../../../assets/img/alojar/carpas/carpa8.jpg';

import CarpaSalon1 from '../../../assets/img/camping/salon/112.jpg';
import CarpaSalon2 from '../../../assets/img/camping/salon/11232312.jpg';
import CarpaSalon3 from '../../../assets/img/camping/salon/324234.jpg';
import CarpaSalon4 from '../../../assets/img/camping/salon/5464.jpg';

import Predio1 from '../../../assets/img/camping/carpa4.jpg';
import Predio2 from '../../../assets/img/camping/carpa5.jpg';
import Predio3 from '../../../assets/img/camping/sillas.jpg';

import Act1 from '../../../assets/img/camping/7567.jpg';
import Act2 from '../../../assets/img/actividades/333.jpg';
import Act3 from '../../../assets/img/actividades/333232.jpg';
import Act4 from '../../../assets/img/actividades/3243242.jpg';
import Act5 from '../../../assets/img/actividades/324324234324.jpg';

import Casilla1 from '../../../assets/img/alojar/casillas/IMG_9811.jpg';
import Casilla2 from '../../../assets/img/alojar/casillas/20230304_113611887.jpg';
import Casilla3 from '../../../assets/img/alojar/casillas/1111.jpg';

import Casilla4 from '../../../assets/img/alojar/casillas/IMG_9817.jpg';
import Casilla5 from '../../../assets/img/alojar/casillas/IMG_9815.jpg';

interface Item {
  title: string;
  description: string;
  images: string[];
}

const data: Record<string, Item[]> = {
  cabañas: [
    {
      title: 'Cabaña Uno',
      description: 'Ideal para familias y grupos grandes.',
      images: [ImgCabUno1, ImgCabUno2, ImgCabUno3, ImgCabUno4],
    },
    {
      title: 'Cabaña Dos',
      description: 'Perfecta para una escapada de relax.',
      images: [ImgCabDos1, ImgCabDos2, ImgCabDos3, ImgCabDos4, ImgCabDos5],
    },
    {
      title: 'Cabaña Pepe',
      description: 'Con vistas al río y senderos cercanos.',
      images: [ImgPepe1, ImgPepe2, ImgPepe3, ImgPepe4, ImgPepe5],
    },
  ],
  casillas: [
    {
      title: 'Casilla Cieri',
      description: 'Cómoda y acogedora, ideal para parejas.',
      images: [Casilla1, Casilla2, Casilla3],
    },
    {
      title: 'Casilla Molle',
      description: 'Espaciosa y con todas las comodidades.',
      images: [Casilla4, Casilla5],
    },
    {
      title: 'Salón del Camping',
      description: 'Rústica y con encanto natural.',
      images: [CarpaSalon1, CarpaSalon2, CarpaSalon3, CarpaSalon4],
    },
  ],
  carpas: [
    {
      title: 'Camping Bosque',
      description: 'Ideal para campamentos en grupo.',
      images: [Carpa1, Carpa2, Carpa3, Carpa4],
    },
    {
      title: 'Salón Tinglado',
      description: 'Ecológica y resistente al clima.',
      images: [CarpaSalon1, CarpaSalon2, CarpaSalon3, CarpaSalon4],
    },
    {
      title: 'Predio para Acampar',
      description: 'Amplia, para toda la familia.',
      images: [Predio1, Predio2, Predio3],
    },
  ],
  albergue: [
    {
      title: 'Grupos Grandes',
      description: 'Ideal para familias y grupos grandes.',
      images: [CampaUno1, CampaUno2, CampaUno3, CampaUno4, CampaUno5, CampaUno6, CampaUno7],
    },
    {
      title: 'Segundo Albergue',
      description: 'Para los amantes de la naturaleza.',
      images: [CampaDos1, CampaDos2, CampaDos3, CampaDos4, CampaDos5, CampaDos6, CampaDos7, CampaDos8, CampaDos9],
    },
    {
      title: 'Actividades Recreativas',
      description: 'Un espacio tranquilo para desconectar.',
      images: [Act1, Act2, Act3, Act4, Act5],
    },
  ],
};

const CategoriaDetalle: React.FC = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const items = categoria ? data[categoria] : [];
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  return (
    
    <div className="categoriaDetalle">
      <button className="volverBtn" onClick={() => navigate('/alojar')}>
              <FaArrowLeft />
              <p>Volver</p>
            </button>
      <h1 className="categoriaTitulo">{categoria?.toUpperCase()}</h1>

      <div className="categoriaGrid">
        {items?.map((item, index) => (
          <div key={index} className="categoriaCard">
            <div className="carousel">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${item.title} ${i + 1}`}
                  className="categoriaImg"
                  onClick={() => setZoomImg(img)}
                />
              ))}
            </div>
            <h2 className="categoriaNombre">{item.title}</h2>
            <p className="categoriaDesc">{item.description}</p>
          </div>
        ))}
      </div>

      {zoomImg && (
        <div className="zoomOverlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoom" className="zoomImg" />
        </div>
      )}
    </div>
  );
};

export default CategoriaDetalle;

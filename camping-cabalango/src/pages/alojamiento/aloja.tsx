import { useState } from 'react';
import './aloja.scss';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import ImgCabañas from '../../assets/img/alojar/cabañas/uno/IMG_0513.jpg';
import ImgCampa from '../../assets/img/alojar/campa/IMG_9368.jpg';
import ImgCasillas from '../../assets/img/alojar/casillas/IMG_9815.jpg';
import ImgCarpas from '../../assets/img/alojar/carpas/carpa1.jpg';

interface BoxProps {
  title: string;
  imgSrc: string;
  slug: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<BoxProps> = ({ title, imgSrc, slug, children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/alojamiento/${slug}`);
  };

  return (
    <div className="alojaBox">
      <div className="alojaBoxHeader" onClick={() => setOpen(prev => !prev)}>
        <img src={imgSrc} alt={title} className="alojaBoxImg" />
        <h2 className="alojaBoxTitle">{title}</h2>
      </div>
      {open && (
        <div className="alojaBoxContent">
          {children}
          <button className="verMasBtn" onClick={handleNavigate}>
           <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

const Alojamiento: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="alojamiento">
      <button className="volverBtn" onClick={() => navigate('/')}>
        <FaArrowLeft />
        <p>Volver</p>
      </button>

      <h1>ALOJAMIENTO</h1>

      <section className="alojaBoxes">
        <ContentBox title="Cabañas" imgSrc={ImgCabañas} slug="cabanas">
          <ul>
            <li>🏵luz, gas , agua</li>
            <li>🏵desde 2 a 8 personas</li>
            <li>🏵wifi</li>
            <li>🏵cocina equipada (básico)</li>
            <li>🏵duchas con agua caliente</li>
            <li>🏵servicio de emergencia</li>
            <li>🏵estacionamiento</li>
            <li>🏵no incluye ropa de cama ni toallas</li>
          </ul>
        </ContentBox>

        <ContentBox title="Albergue de montaña" imgSrc={ImgCampa} slug="albergue">
          <ul>
            <li>🏵 albergue de montaña con capacidad para 80 personas</li>
            <li>🏵Salón con capacidad para 400 personas cerrado con calefacción al leña.</li>
            <li>🏵baños con agua caliente</li>
            <li>🏵cocina industrial,con elementos de cocina industrial.</li>
            <li>🏵servicio de comidas y desayunos a convenir.</li>
            <li>🏵zona para acampar con toma corrientes,mesas,sillas,asadores con parrilla</li>
            <li>🏵actividades recreativas( trekking,rapell, escalada)</li>
            <li>🏵botiquin primeros auxilios</li>
            <li>🏵Baños comunes</li>
          </ul>
        </ContentBox>

        <ContentBox title="Casillas" imgSrc={ImgCasillas} slug="casillas">
          <ul>
            <li>🏵Estilo camper</li>
            <li>🏵desde 2 a 8 personas</li>
            <li>🏵Conexión a electricidad</li>
            <li>🏵servicio de emergencia</li>
            <li>🏵Estacionamiento</li>
          </ul>
        </ContentBox>

        <ContentBox title="Carpas" imgSrc={ImgCarpas} slug="carpas">
          <ul>
            <li>🏵Zona de acampe</li>
            <li>🏵Acceso a baños</li>
            <li>🏵Sin reserva</li>
            <li>🏵Para conectar con la naturaleza</li>
          </ul>
        </ContentBox>
      </section>
    </main>
  );
};

export default Alojamiento;

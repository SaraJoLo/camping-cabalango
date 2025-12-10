import { useState } from 'react';
import './aloja.scss';
import Btnback from '../../components/btnback/btnback.tsx';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImgCampa from '../../assets/img/alojar/campa/albergue2/IMG_9388.jpg';
import ImgCasillas from '../../assets/img/alojar/casillas/IMG_9827.jpg';
import ImgCarpas from '../../assets/img/alojar/carpas/carpa1.jpg';

interface BoxProps {
  title: string;
  imgSrc: string;
  slug: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const ContentBox: React.FC<BoxProps> = ({ title, imgSrc, slug, children, isOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/alojar/${slug}`);
  };

  return (
    <div className="alojaBox">
      <div className="alojaBoxHeader" onClick={onToggle}>
        <img src={imgSrc} alt={title} className="alojaBoxImg" />
        <h2 className="alojaBoxTitle">{title}</h2>
      </div>
      <div className={`alojaBoxContent ${isOpen ? 'open' : ''}`}>
        {children}
        <button className="verMasBtn" onClick={handleNavigate}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const Alojamiento: React.FC = () => {
  const [openBox, setOpenBox] = useState<string | null>(null);

  const handleToggle = (slug: string) => {
    setOpenBox(prev => (prev === slug ? null : slug));
  };

  return (
    <main className="alojamiento">
      <Btnback />

      <h1>ALOJAMIENTO</h1>

      <section className="alojaBoxes">
        

        <ContentBox
          title="Albergue de montaña"
          imgSrc={ImgCampa}
          slug="albergue"
          isOpen={openBox === 'albergue'}
          onToggle={() => handleToggle('albergue')}
        >
          <ul>
            <li>🏵 albergue de montaña con capacidad para 80 personas</li>
            <li>🏵 salón para 200 personas con calefacción</li>
            <li>🏵 baños</li>
            <li>🏵 duchas con agua caliente</li>
            <li>🏵 cocina industrial equipada</li>
            <li>🏵 comidas y desayunos a convenir</li>
            <li>🏵 zona de acampar con mesas y parrillas</li>
            <li>🏵 actividades recreativas</li>
            <li>🏵 botiquín primeros auxilios</li>
          </ul>
        </ContentBox>

        <ContentBox
          title="Casillas"
          imgSrc={ImgCasillas}
          slug="casillas"
          isOpen={openBox === 'casillas'}
          onToggle={() => handleToggle('casillas')}
        >
          <ul>
            <li>🏵 estilo camper</li>
            <li>🏵 desde 2 a 8 personas</li>
            <li>🏵 toma corriente</li>
            <li>🏵 servicio de emergencia</li>
          </ul>
        </ContentBox>

        <ContentBox
          title="Carpas"
          imgSrc={ImgCarpas}
          slug="carpas"
          isOpen={openBox === 'carpas'}
          onToggle={() => handleToggle('carpas')}
        >
          <ul>
            <li>🏵 zona de acampe</li>
            <li>🏵 acceso a baños</li>
            <li>🏵 sin reserva</li>
            <li>🏵 bajada directa al Río Los Chorrillos</li>
          </ul>
        </ContentBox>
      </section>
    </main>
  );
};

export default Alojamiento;

import { useState } from 'react';
import './aloja.scss';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import ImgCabañas from '../../assets/img/alojar/cabañas/uno/IMG_0513.jpg';
import ImgCampa from '../../assets/img/alojar/campa/IMG_9368.jpg';
import ImgCasillas from '../../assets/img/alojar/casillas/IMG_9815.jpg';
import ImgCarpas from '../../assets/img/alojar/carpas/carpa1.jpg';

interface BoxProps {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<BoxProps> = ({ title, imgSrc, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="alojaBox">
      <div className="alojaBoxHeader" onClick={() => setOpen(prev => !prev)}>
        <img src={imgSrc} alt={title} className="alojaBoxImg" />
        <h2 className="alojaBoxTitle">{title}</h2>
      </div>
      {open && <div className="alojaBoxContent">{children}</div>}
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
        <ContentBox title="Cabañas" imgSrc={ImgCabañas}>
          <p>Descripción de las cabañas...</p>
        </ContentBox>
        <ContentBox title="Albergue de montaña" imgSrc={ImgCampa}>
          <p>Descripción del albergue de montaña...</p>
        </ContentBox>
        <ContentBox title="Casillas" imgSrc={ImgCasillas}>
          <p>Descripción de las casillas...</p>
        </ContentBox>
        <ContentBox title="Carpas" imgSrc={ImgCarpas}>
          <p>Descripción de las carpas...</p>
        </ContentBox>
      </section>
    </main>
  );
};

export default Alojamiento;

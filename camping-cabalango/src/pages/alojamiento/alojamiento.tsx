import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btnback from '../../components/btnback/btnback'
import './alojamiento.scss'

import ImgCampa from '../../assets/img/alojar/campa/albergue2/IMG_9388.jpg'
import ImgCasillas from '../../assets/img/alojar/casillas/tala/1tala.jpg'
import ImgCarpas from '../../assets/img/alojar/carpas/carpa1.jpg'
import ImgCabanas from '../../assets/img/alojar/cabanas/cabauno/aentrada.jpeg'

interface BoxProps {
  title: string
  imgSrc: string
  slug: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

const ContentBox: React.FC<BoxProps> = ({
  title,
  imgSrc,
  slug,
  children,
  isOpen,
  onToggle,
}) => {
  const navigate = useNavigate()

  return (
    <article
      className="alojaBox"
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/alojamiento/${slug}`)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/alojamiento/${slug}`)}
    >
      <header className="alojaBoxHeader">
        <h2 className="alojaBoxTitle">{title}</h2>
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="alojaBoxImg"
        />
      </header>

      <section
        className={`alojaBoxContent ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>

      <button
        className="toggleBtn"
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        aria-expanded={isOpen}
        aria-controls={slug}
      >
        {isOpen ? 'Ver menos' : 'Ver detalles'}
      </button>
    </article>
  )
}

const Alojamiento: React.FC = () => {
  const [openBox, setOpenBox] = useState<string | null>(null)

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
          onToggle={() =>
            setOpenBox(openBox === 'albergue' ? null : 'albergue')
          }
        >
          <ul>
            <li>Capacidad para 80 personas</li>
            <li>Salón calefaccionado</li>
            <li>Baños y duchas</li>
            <li>Cocina industrial</li>
          </ul>
        </ContentBox>

        <ContentBox
          title="Casillas"
          imgSrc={ImgCasillas}
          slug="casillas"
          isOpen={openBox === 'casillas'}
          onToggle={() =>
            setOpenBox(openBox === 'casillas' ? null : 'casillas')
          }
        >
          <ul>
            <li>Desde 2 a 8 personas</li>
            <li>Estilo camper</li>
            <li>Toma corriente</li>
          </ul>
        </ContentBox>

        <ContentBox
          title="Carpas"
          imgSrc={ImgCarpas}
          slug="carpas"
          isOpen={openBox === 'carpas'}
          onToggle={() =>
            setOpenBox(openBox === 'carpas' ? null : 'carpas')
          }
        >
          <ul>
            <li>Zona de acampe</li>
            <li>Acceso a baños</li>
            <li>Sin reserva</li>
          </ul>
        </ContentBox>

        <ContentBox
          title="Cabañas"
          imgSrc={ImgCabanas}
          slug="cabanas"
          isOpen={openBox === 'cabanas'}
          onToggle={() =>
            setOpenBox(openBox === 'cabanas' ? null : 'cabanas')
          }
        >
          <ul>
            <li>Desde 2 a 8 personas</li>
            <li>Cocina completa</li>
            <li>Baño privado</li>
          </ul>
        </ContentBox>
      </section>
    </main>
  )
}

export default Alojamiento

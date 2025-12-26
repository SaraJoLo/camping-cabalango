import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Btnback from '../../../components/btnback/btnback'
import './categoria.scss'

import Carpa from '../../../assets/img/alojar/carpas/carpa1.jpg'
import Carpa2 from '../../../assets/img/alojar/carpas/carpas3.jpg'
import Carpa3 from '../../../assets/img/alojar/carpas/carpas4.jpg'
import Carpa4 from '../../../assets/img/alojar/carpas/carpas6.jpg'
import Carpa5 from '../../../assets/img/alojar/carpas/prediocarpas.jpg'
import Carpa6 from '../../../assets/img/alojar/carpas/tomacorriente.jpg'

import CampaUno1 from '../../../assets/img/alojar/campa/albergue1/IMG_9364.jpg'
import CampaUno2 from '../../../assets/img/alojar/campa/albergue1/IMG_9366.jpg'
import CampaUno4 from '../../../assets/img/alojar/campa/albergue1/IMG_9368.jpg'
import CampaUno5 from '../../../assets/img/alojar/campa/albergue1/IMG_9371.jpg'
import CampaUno6 from '../../../assets/img/alojar/campa/albergue1/IMG_9375.jpg'
import CampaUno7 from '../../../assets/img/alojar/campa/albergue1/IMG_9377.jpg'

import CampaDos1 from '../../../assets/img/alojar/campa/albergue2/IMG_9384.jpg'
import CampaDos2 from '../../../assets/img/alojar/campa/albergue2/IMG_9385.jpg'
import CampaDos3 from '../../../assets/img/alojar/campa/albergue2/IMG_9388.jpg'
import CampaDos4 from '../../../assets/img/alojar/campa/albergue2/IMG_9390.jpg'
import CampaDos5 from '../../../assets/img/alojar/campa/albergue2/IMG_9393.jpg'
import CampaDos6 from '../../../assets/img/alojar/campa/albergue2/IMG_9394.jpg'
import CampaDos7 from '../../../assets/img/alojar/campa/albergue2/IMG_9400.jpg'
import CampaDos8 from '../../../assets/img/alojar/campa/albergue2/IMG_9402.jpg'
import CampaDos9 from '../../../assets/img/alojar/campa/albergue2/IMG_9404.jpg'

import CasillaMolle from '../../../assets/img/alojar/casillas/molle/1molleportada.jpg'
import CasillaMolle1 from '../../../assets/img/alojar/casillas/molle/2molle.jpg'
import CasillaMolle2 from '../../../assets/img/alojar/casillas/molle/3molle.jpg'
import CasillaMolle3 from '../../../assets/img/alojar/casillas/molle/4molle.jpg'
import CasillaMolle4 from '../../../assets/img/alojar/casillas/molle/5molle.jpg'
import CasillaMolle5 from '../../../assets/img/alojar/casillas/molle/6molle.jpg'
import CasillaMolle6 from '../../../assets/img/alojar/casillas/molle/7molle.jpg'

import Tala from '../../../assets/img/alojar/casillas/tala/1tala.jpg'
import Tala1 from '../../../assets/img/alojar/casillas/tala/2tala.jpg'
import Tala2 from '../../../assets/img/alojar/casillas/tala/3tala.jpg'
import Tala3 from '../../../assets/img/alojar/casillas/tala/4tala.jpg'
import Tala4 from '../../../assets/img/alojar/casillas/tala/8molle.jpg'
import Tala5 from '../../../assets/img/alojar/casillas/tala/20230304_113546230.jpg'

import Ciruela4 from '../../../assets/img/alojar/casillas/ciruela/afueraciruela.jpeg'
import Ciruela from '../../../assets/img/alojar/casillas/ciruela/camaciruela.jpeg'
import Ciruela1 from '../../../assets/img/alojar/casillas/ciruela/ciruela1.jpeg'
import Ciruela2 from '../../../assets/img/alojar/casillas/ciruela/ciruela2.jpeg'
import Ciruela3 from '../../../assets/img/alojar/casillas/ciruela/ciruela22.jpeg'
import Ciruela5 from '../../../assets/img/alojar/casillas/ciruela/ventana.jpeg'

import Mar from '../../../assets/img/alojar/casillas/mar/1chañar.jpg'
import Mar1 from '../../../assets/img/alojar/casillas/mar/chañar2.jpg'
import Mar2 from '../../../assets/img/alojar/casillas/mar/chañar3.jpg'
import Mar3 from '../../../assets/img/alojar/casillas/mar/chañar4.jpg'
import Mar4 from '../../../assets/img/alojar/casillas/mar/chañar5.jpg'
import Mar5 from '../../../assets/img/alojar/casillas/mar/chañar7.jpg'

import Zorzal1 from '../../../assets/img/alojar/casillas/zorzal/zorz.jpeg'
import Zorzal2 from '../../../assets/img/alojar/casillas/zorzal/zorzal.jpeg'

import Cab1 from '../../../assets/img/alojar/cabanas/cabauno/aentrada.jpeg'
import Cab11 from '../../../assets/img/alojar/cabanas/cabauno/bañouno.jpeg'
import Cab12 from '../../../assets/img/alojar/cabanas/cabauno/cab3.jpg'
import Cab13 from '../../../assets/img/alojar/cabanas/cabauno/cab6.jpg'
import Cab14 from '../../../assets/img/alojar/cabanas/cabauno/casadoscome.jpeg'
import Cab15 from '../../../assets/img/alojar/cabanas/cabauno/comeruno.jpeg'
import Cab16 from '../../../assets/img/alojar/cabanas/cabauno/entrauno.jpeg'
import Cab17 from '../../../assets/img/alojar/cabanas/cabauno/imagen2.jpg'
import Cab18 from '../../../assets/img/alojar/cabanas/cabauno/living.jpg'
import Cab19 from '../../../assets/img/alojar/cabanas/cabauno/unococina.jpeg'
import Cab110 from '../../../assets/img/alojar/cabanas/cabauno/unouno.jpeg'

import Cab2 from '../../../assets/img/alojar/cabanas/cabados/23423.jpg'
import Cab21 from '../../../assets/img/alojar/cabanas/cabados/aentrada.jpeg'
import Cab22 from '../../../assets/img/alojar/cabanas/cabados/casadoshab.jpeg'
import Cab23 from '../../../assets/img/alojar/cabanas/cabados/cocinados.jpeg'
import Cab24 from '../../../assets/img/alojar/cabanas/cabados/habitaciondos.jpeg'
import Cab25 from '../../../assets/img/alojar/cabanas/cabados/livingdos.jpeg'
import Cab26 from '../../../assets/img/alojar/cabanas/cabados/banodos.jpeg'
import Cab27 from '../../../assets/img/alojar/cabanas/cabados/bono33 (22).jpeg'

import Bono1 from '../../../assets/img/alojar/cabanas/bono/Hab1.jpg'
import Bono2 from '../../../assets/img/alojar/cabanas/bono/Hab2.jpg'
import Bono3 from '../../../assets/img/alojar/cabanas/bono/Hab3.jpg'  
import Bono4 from '../../../assets/img/alojar/cabanas/bono/Hab4.jpg'
import Bono5 from '../../../assets/img/alojar/cabanas/bono/Hab5.jpg'
import Bono6 from '../../../assets/img/alojar/cabanas/bono/Habitacion.jpg'
import Bono7 from '../../../assets/img/alojar/cabanas/bono/Patio.jpg'
import Bono8 from '../../../assets/img/alojar/cabanas/bono/Patio1.jpg'
import Bono9 from '../../../assets/img/alojar/cabanas/bono/Patio2.jpg'

import Piedra from '../../../assets/img/alojar/cabanas/piedra/casapiedfa4.jpg'
import Piedra2 from '../../../assets/img/alojar/cabanas/piedra/casapiedra2.jpg'
import Piedra3 from '../../../assets/img/alojar/cabanas/piedra/casapiedra3.jpg'
import Piedra4 from '../../../assets/img/alojar/cabanas/piedra/casapiedra1.jpg'
import Piedra5 from '../../../assets/img/alojar/cabanas/piedra/casapiedra5.jpg'

interface Item {
  title: string
  description: string
  images: string[]
}

type CategoriaKey = 'albergue' | 'casillas' | 'carpas' | 'cabanas'

const labels: Record<CategoriaKey, string> = {
  albergue: 'Albergue',
  casillas: 'Casillas',
  carpas: 'Carpas',
  cabanas: 'Cabañas',
}

const data: Record<CategoriaKey, Item[]> = {
  cabanas: [
    {
      title: 'Cabaña Uno',
      description:
        'Para 2/3 personas. Cuenta con una cama doble y un sillón cama. Cocina equipada y heladera. Excelente vista a la montaña y privacidad.',
      images: [Cab1, Cab11, Cab12, Cab13, Cab14, Cab15, Cab16, Cab17, Cab18, Cab19, Cab110],
    },
    {
      title: 'Cabaña Dos',
      description:
        'Para 4 a 5 personas. Ideal para familias. Cuenta con una cama doble, una cucheta de dos camas individuales y un sillón cama. Cocina equipada con heladera.',
      images: [Cab2, Cab21, Cab22, Cab23, Cab24, Cab25, Cab26, Cab27],
    },
    {
      title: 'Cabaña Bono',
      description:
        'Para 8 personas. Cuenta con una habitación con cama doble y otra con cama doble y una cucheta. En el living presenta un sillón de doble cama individual. Cocina con horno, vajilla completa y heladera con freezer.',
      images: [Bono1, Bono2, Bono3, Bono4, Bono5, Bono6, Bono7, Bono8, Bono9],
    },
    {
      title: 'Casita de Piedra',
      description:
        'Para 5/8 personas. Ideal para familias. Cuenta con dos camas dobles y una cama marinera. Cocina con horno, vajilla completa y heladera. A metros del Río Los Chorrillos. Sólo con reserva.',
      images: [Piedra, Piedra2, Piedra3, Piedra4, Piedra5],
    },
  ],

  casillas: [
    {
      title: 'Casilla Molle',
      description: 'Para 3 o 4 personas.',
      images: [CasillaMolle, CasillaMolle1, CasillaMolle2, CasillaMolle3, CasillaMolle4, CasillaMolle5, CasillaMolle6],
    },
    {
      title: 'Casilla Tala',
      description: 'Para 3 personas.',
      images: [Tala, Tala1, Tala2, Tala3, Tala4, Tala5],
    },
    {
      title: 'Casilla Mar',
      description: 'Para 5 a 7 personas.',
      images: [Mar, Mar1, Mar2, Mar3, Mar4, Mar5],
    },
    {
      title: 'Casilla Ciruela',
      description: 'Para 3 personas.',
      images: [Ciruela, Ciruela1, Ciruela2, Ciruela3, Ciruela4, Ciruela5],
    },
    {
      title: 'Casilla Zorzal',
      description: 'Para 2 personas.',
      images: [Zorzal1, Zorzal2],
    },
  ],

  carpas: [
    {
      title: 'Camping',
      description: 'Amplio espacio para acampe con toma corriente y mesas.',
      images: [Carpa, Carpa2, Carpa3, Carpa4, Carpa5, Carpa6],
    },
  ],

  albergue: [
    {
      title: 'Albergue de Montaña 1',
      description:
        '40 cuchetas, cocina industrial, baños y predio para actividades.',
      images: [CampaUno1, CampaUno2, CampaUno4, CampaUno5, CampaUno6, CampaUno7],
    },
    {
      title: 'Albergue de Montaña 2',
      description:
        'Dos plantas, 40 cuchetas, SUM y cercanía al río.',
      images: [CampaDos1, CampaDos2, CampaDos3, CampaDos4, CampaDos5, CampaDos6, CampaDos7, CampaDos8, CampaDos9],
    },
  ],
}

const CategoriaDetalle: React.FC = () => {
  const { categoria } = useParams<{ categoria: CategoriaKey }>()
  const items = categoria && data[categoria] ? data[categoria] : []
  const [zoomImg, setZoomImg] = useState<string | null>(null)

  return (
    <main className="categoriaDetalle">
      <Btnback />

      <h1 className="categoriaTitulo">
        {categoria && labels[categoria]}
      </h1>

      <section className="categoriaGrid">
        {items.map((item, index) => (
          <article key={index} className="categoriaCard">
            {item.images.length > 0 && (
              <div className="carousel">
                {item.images.map((img, i) => (
                  <button
                    key={i}
                    className="imgButton"
                    onClick={() => setZoomImg(img)}
                  >
                    <img
                      src={img}
                      alt={`${item.title} ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="categoriaImg"
                    />
                  </button>
                ))}
              </div>
            )}

            <h2 className="categoriaNombre">{item.title}</h2>
            <p className="categoriaDesc">{item.description}</p>
          </article>
        ))}
      </section>

      {zoomImg && (
        <div className="zoomOverlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Imagen ampliada" className="zoomImg" />
        </div>
      )}
    </main>
  )
}

export default CategoriaDetalle

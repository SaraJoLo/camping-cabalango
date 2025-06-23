import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ImgUno from '../../assets/img/camping/888.jpg';
import ImgDos from '../../assets/img/camping/4845876.jpg';
import ImgTres from '../../assets/img/camping/9889.jpg';
import ImgCuatro from '../../assets/img/camping/1111.jpg';
import ImgCinco from '../../assets/img/camping/origen.jpg';
import ImgSeis from '../../assets/img/camping/324234.png';
import './Origen.scss';

interface BoxProps {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<BoxProps> = ({ title, imgSrc, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="origenBox">
      <div className="origenBoxHeader" onClick={() => setOpen(prev => !prev)}>
        <img src={imgSrc} alt={title} className="origenBoxImg" />
        <h2 className="origenBoxTitle">{title}</h2>
      </div>
      {open && <div className="origenBoxContent">{children}</div>}
    </div>
  );
};

const Origen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="origen">
      <button className="volverBtn" onClick={() => navigate('/')}>
        <FaArrowLeft />
        <p>Volver</p>
      </button>
      <h1>Origen</h1>

      <section className="origenBoxes">
        <ContentBox title="Historia" imgSrc={ImgUno}>
          <p>El Camping Cabalango es un emprendimiento familiar gestado en el año 1983 es decir que hace 42 años que estamos funcionando sin interrupción y atendido por sus propios dueños: la familia Losada-Weht. <br></br><br></br>
La idea de un camping surgió sin querer, porque nuestra intención era comprar un terreno en las sierras para hacer nuestra propia casa de campo. <br></br><br></br>
Afortunadamente encontramos este maravilloso lugar con este río inigualable que fué sede de un asentamiento de Comechingones, por lo que hay en la zona y en el mismo lote restos arqueológicos de ellos , aquí vivieron 800 años.<br></br><br></br>
<br></br>
          <img src={ImgCuatro} alt="Historia 1" />
Compramos varias hectáreas forestadas con flora autóctona de algarrobos, chañares ,molles, talas, espinillos y un sinfín de otras especies, era un verdadero museo intocado pues había estado cercado y no habían entrado ni vacas ni caballos.<br></br><br></br>
Es así como construimos nuestra primera casita, a la verá del río y en ella recibíamos a nuestros amigos que eran gente que les gustaba la naturaleza, el silencio, los pájaros y coincidíamos en eso. Llegó un momento en que no cabían en nuestra casa y empezaron a armar carpitas alrededor, no había ningún servicio ni agua, ni baños, tampoco infraestructura. Igualmente pasamos momentos muy hermosos. En este ambiente se criaron nuestros hijos y posteriormente nuestros nietos. <br></br><br></br>
<br></br>
Con el correr del tiempo nos vimos en la necesidad de construir infraestructura necesaria para acampar y así se creó el Camping Cabalango..
Fuimos incorporando infraestructura y servicios para contener a la gente que llegaba que cada vez fue más y de lo más variada: familias con sus hijos, grupos de jóvenes, instituciones de las más variadas disciplinas como políticas religiosas y muchas otras.<br></br>
<br></br>
Actualmente consta de un predio de unas 4 hectáreas forestadas con infinidad de árboles que había y que plantamos después nosotros con todo lo necesario para pasar unas  vacaciones muy lindas, tenemos cabañas, casillas rodantes, albergues con camas para 100 personas ,un salón de usos múltiples gigante con capacidad para 300 personas,donde se hacen fiestas, casamientos, reuniones ,etcétera etcétera, baños muy lindos con duchas calientes, todo iluminado, una placita de juegos infantiles, numerosas sillas , mesas y asadores y por sobre todo un río precioso ideal para tomar sol , bañarse o simplemente tomar mates en las sombras de su ribera.
<br></br>
</p>
<br></br>
          <img src={ImgCinco} alt="Historia 2" />
        </ContentBox>

        <ContentBox title="Sostenibilidad" imgSrc={ImgDos}>
          <p>En nuestro camping asumimos con responsabilidad el uso de los recursos y la gestión de los residuos que generamos. Creemos que cada acción cuenta, y por eso trabajamos activamente para reducir nuestro impacto ambiental.
<br></br>
Nuestro objetivo es claro: minimizar al máximo los residuos desechables y transformar los residuos reutilizables en nuevos recursos que puedan reinsertarse en la cadena de producción. Esta tarea no solo es práctica, sino también educativa: buscamos generar conciencia para una transformación profunda y duradera.
<br></br>
<br></br>
¿Cómo lo hacemos?
<br></br>
Implementamos un sistema de separación y clasificación de residuos para facilitar su correcto tratamiento:
<br></br>
♻️ Reciclables: Enviamos todo lo aprovechable a la recicladora Tukuy, incluyendo botellas de plástico, vidrio, cartón y latas.
<br></br>
🌱 Compost: Los residuos orgánicos vegetales se compostan en el lugar, nutriendo la tierra y cerrando el ciclo natural de los alimentos.
<br></br>
🐾 Alimentación animal: Los restos orgánicos no vegetales (como pan, arroz o cáscaras de huevo) se destinan a la alimentación de animales de granja o mascotas.
<br></br>
🚯 Residuos húmedos: Aquellos materiales que actualmente no son reciclables (pañales, envoltorios plásticos, toallitas femeninas, tampones, papel higiénico) se gestionan de forma separada para su disposición final.
<br></br>
<br></br>
Contamos con cartelería clara en todo el predio que indica dónde debe depositarse cada tipo de residuo.

</p>
          <img src={ImgSeis} alt="Sostenibilidad" />
        </ContentBox>

        <ContentBox title="Valores" imgSrc={ImgTres}>
          <p>🌿 Respeto por la Naturaleza<br></br>
Vivimos y trabajamos en contacto directo con el entorno. Lo cuidamos con responsabilidad y promovemos una convivencia armoniosa con la tierra, el agua, las plantas y los animales.
<br></br><br></br>
🤝 Compromiso Comunitario<br></br>
Creemos en la fuerza del trabajo colectivo. Fomentamos la participación activa de nuestros visitantes, vecinos y colaboradores en cada acción sostenible que llevamos adelante.
<br></br><br></br>
♻️ Cultura del Reciclaje y Reutilización<br></br>
No vemos residuos, vemos recursos. Apostamos a una economía circular que reduzca el descarte y amplifique las posibilidades de transformación.
<br></br><br></br>
💡 Conciencia y Educación<br></br>
Cada acción es una oportunidad para aprender. Promovemos hábitos responsables a través del ejemplo, la señalización clara y espacios de aprendizaje informal.
<br></br><br></br>
🧘‍♀️ Simplicidad y Bienestar<br></br>
Valoramos una vida más simple, conectada con lo esencial. Apostamos a experiencias que nutran el cuerpo, la mente y el espíritu, con bajo impacto ambiental.
<br></br><br></br>
🌍 Transformación Sustentable<br></br>
Sabemos que los cambios reales comienzan por uno mismo. Por eso, cultivamos una visión a largo plazo que se refleja en nuestras decisiones diarias y nuestro modo de habitar el mundo. </p>
          <img src={ImgTres} alt="Valores 1" />
        </ContentBox>
      </section>
    </main>
  );
};

export default Origen;

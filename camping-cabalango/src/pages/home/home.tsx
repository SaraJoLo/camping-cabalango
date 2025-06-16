import './home.scss';
import campingImg from '../../assets/img/camping/1111.jpg';

const Home = () => {
  return (
    <main className="home">
      <section className="home__hero">
         <div className="home__content">
          <h1>Camping Cabalango</h1>
          <p className="subtitle">
            El lugar ideal para recargar energías y disfrutar en la naturaleza
          </p>
          <a href="tel:352432423" className="home__btn">352432423</a>
        </div>
        <div className="home__image">
          <img src={campingImg} alt="Vista del camping Cabalango" />
        </div>

       
      </section>
    </main>
  );
};

export default Home;
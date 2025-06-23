import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Map from './components/map/map';
import Legal from './pages/legal/legal';
import TerminosCondiciones from './pages/terminos/terminos-condiciones';
import Origen from './pages/origen/origen';
import Alojamiento from './pages/alojamiento/aloja';

function App() {
  return (
    <div className="appLayout">
      <Router>
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/origen" element={<Origen />} />
            <Route path="/map" element={<Map />} />
            <Route path="/alojar" element={<Alojamiento />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/terminoscondiciones" element={<TerminosCondiciones />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Map from './components/map/map';
import Legal from './pages/legal/legal';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Map from './components/map/map';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

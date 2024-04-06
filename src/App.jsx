import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Pagrindinis from './components/Pagrindinis/Pagrindinis';
import './App.css';
import Paslaugos from './components/Paslaugos/Paslaugos';
import Galerija from './components/Galerija/Galerija';
import Kontaktai from './components/Kontaktai/Kontaktai';
import Apiemus from './components/Apiemus/Apiemus';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pagrindinis />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="/apiemus" element={<Apiemus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

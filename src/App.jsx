import { Routes, Route } from 'react-router-dom';

import Navigacija from './components/Navigacija/Navigacija';
import Pagrindinis from './components/Pagrindinis/Pagrindinis';
import './App.css';
import Paslaugos from './components/Paslaugos/Paslaugos';
import Galerija from './components/Galerija/Galerija';
import Kontaktai from './components/Kontaktai/Kontaktai';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import useAuth from './hooks/useAuth';
function App() {
  // const { token } = useAuth();
  return (
    <>
      <Navigacija />
      <Routes>
        <Route path="/" element={<Pagrindinis />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="/admin" element={<Admin />} />
        {/* {token && <Route path="/admin" element={<Admin />} />} */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

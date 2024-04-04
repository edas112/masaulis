import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Pagrindinis from './components/Pagrindinis/Pagrindinis';
import './App.css';
import Paslaugos from './components/Paslaugos/Paslaugos';
import Galerija from './components/Galerija/Galerija';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pagrindinis />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/galerija" element={<Galerija />} />
        {/* <Route path="/" element={<Pradzia />} />
        <Route path="/" element={<Pradzia />} /> */}
      </Routes>
    </>
  );
}

export default App;

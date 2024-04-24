import './pagrindinis.scss';

import PaslaugosTitulinis from '../Paslaugos/PaslaugosTitulinis/Titulinis.jsx';
import GalerijaTitulinis from '../Galerija/GalerijaTitulinis/Titulinis.jsx';

function Pagrindinis() {
  return (
    <>
      <div className="conteiner-pagrindinis container">
        <h1>MB Masaulis</h1>
        <p>
          Profesionalų komanda atliekanti visus statybos, remonto, apdailos,
          elektros instaliacijos darbus! <br /> VISUS DARBUS ATLIEKAME
          KOKYBIŠKAI IR LAIKANTIS TERMINŲ! <br /> Bendradarbiaujame su
          profesonaliais architektais, projektuotojais, dizaineriais,
          santechnikais, baldų bei durų gamintojais. Naudojame tik naujausius ir
          kokybiškus įrankius bei techniką. Galime pasirūpinti Jūsų projektų nuo
          pradžios iki pabaigos! Visų darbų kainos KONKURENCINGOS!!
        </p>
      </div>
      <PaslaugosTitulinis />
      <GalerijaTitulinis />
    </>
  );
}

export default Pagrindinis;

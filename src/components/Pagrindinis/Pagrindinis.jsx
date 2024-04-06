import './pagrindinis.scss';

import Paslaugos from '../Paslaugos/Paslaugos.jsx';
import Galerija from '../Galerija/Galerija.jsx';

function Pagrindinis() {
  return (
    <>
      <div className="conteiner-pagrindinis">
        <h1>Apdailos Darbai</h1>
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
      <Paslaugos />
      <Galerija />
    </>
  );
}

export default Pagrindinis;

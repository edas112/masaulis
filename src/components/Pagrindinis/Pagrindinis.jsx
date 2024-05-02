import './pagrindinis.scss';

import PaslaugosTitulinis from '../Paslaugos/PaslaugosTitulinis/Titulinis.jsx';
import GalerijaTitulinis from '../Galerija/GalerijaTitulinis/Titulinis.jsx';
import EmailLink from '../Kontaktai/EmailLink/EmailLink.jsx';

function Pagrindinis() {
  return (
    <>
      <div className="conteiner-pagrindinis container">
        <h1>MB Masaulis</h1>
        <p>
          Profesionalų komanda atliekanti visus apdailos darbus! <br /> VISUS
          DARBUS ATLIEKAME KOKYBIŠKAI IR LAIKANTIS TERMINŲ! <br />{' '}
          Bendradarbiaujame su profesonaliais architektais, projektuotojais,
          dizaineriais, santechnikais, baldų bei durų gamintojais. Naudojame
          šiuolaikiškus darbo įrankius. Galime pasirūpinti Jūsų projektų nuo
          pradžios iki pabaigos! Visų darbų kainos KONKURENCINGOS!!
        </p>
      </div>
      <PaslaugosTitulinis />
      <GalerijaTitulinis />
      <EmailLink />
    </>
  );
}

export default Pagrindinis;

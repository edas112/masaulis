import './galerija.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import GalerijaTitulinis from './GalerijaTitulinis/Titulinis';

function Galerija() {
  const { data, loadingPaslaugos } = useContext(AppContext);

  return (
    <>
      <GalerijaTitulinis />
      <div className="galerija container">
        <h1>Galerija</h1>
        <h2>Mūsų atlikti darbai</h2>
        <div className="container nuotraukos">
          {loadingPaslaugos && !data.length && (
            <h2 className="galerija-kraunasi"></h2>
          )}
          {data.map((item) => {
            return <img src={item.img}></img>;
          })}
        </div>
      </div>
    </>
  );
}

export default Galerija;

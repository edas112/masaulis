import './galerija.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import Kortele from '../Paslaugos/Kortele/Kortele';

import GalerijaTitulinis from './GalerijaTitulinis/Titulinis';

function Galerija() {
  const { data } = useContext(AppContext);

  return (
    <>
      <GalerijaTitulinis />
      <dir className="galerija container">
        <h1>Galerija</h1>
        <h2>Mūsų atlikti darbai</h2>
        {data.map((item) => {
          return <Kortele key={item.title} img={item.img} />;
        })}
      </dir>
    </>
  );
}

export default Galerija;

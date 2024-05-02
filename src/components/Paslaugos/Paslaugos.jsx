import './paslaugos.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import Kortele from './Kortele/Kortele';
import Titulinis from './PaslaugosTitulinis/Titulinis';

function Paslaugos() {
  const { data, loadingPaslaugos } = useContext(AppContext);

  return (
    <>
      <Titulinis />
      <div className="korteles container">
        {loadingPaslaugos && !data.length && <h2 className="kraunasi"></h2>}
        {data.map((item) => {
          return (
            <Kortele
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default Paslaugos;

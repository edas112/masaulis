import './paslaugos.css';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import Kortele from './Kortele/Kortele';
import Titulinis from './Titulinis/Titulinis';

function Paslaugos() {
  const { data } = useContext(AppContext);

  return (
    <>
      <Titulinis />
      <div>
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

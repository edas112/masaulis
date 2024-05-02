import './titulinis.scss';

import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

function Titulinis() {
  const { data, loadingPaslaugos } = useContext(AppContext);

  return (
    <div className="titulinis container">
      <h1>Mūsų teikiamos paslaugos</h1>

      <ul>
        {loadingPaslaugos && !data.length && <h2 className="kraunasi"></h2>}
        {data.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Titulinis;

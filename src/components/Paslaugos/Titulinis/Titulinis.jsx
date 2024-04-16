import './titulinis.scss';
import Kortele from '../Kortele/Kortele';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

function Titulinis() {
  const { data } = useContext(AppContext);

  return (
    <div className="paslaugos container">
      <h1>Mūsų teikiamos paslaugos</h1>

      <ul>
        <li className="paslauga container">
          {data.map((item) => {
            return <Kortele key={item.title} title={item.title} />;
          })}
        </li>
      </ul>

      {/* <ul>
        <li>Dažymas</li>
        <li>Glaistymas</li>
        <li>Tinkavimas</li>
        <li>Tapetavimas</li>
        <li>Gipso montavimas</li>
        <li>Smulkūs elektros darbai</li>
        <li>Durų montavimas</li>
        <li>Drindų dangos įrengimas</li>
      </ul> */}
    </div>
  );
}

export default Titulinis;

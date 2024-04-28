import EmailLink from './EmailLink/EmailLink';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import './kontaktai.scss';

function Kontaktai() {
  const { footerData } = useContext(AppContext);

  return (
    <>
      <EmailLink />;
      <div className="kontaktai container">
        <h1>Kontaktai</h1>
        <p>{footerData.title}</p>
        <p>{footerData.adres}</p>
        <p>{footerData.email}</p>
        <p>{footerData.number}</p>
      </div>
    </>
  );
}

export default Kontaktai;

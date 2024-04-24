import './footer.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function Footer() {
  const { footerData } = useContext(AppContext);
  const { getCurrentDateTime } = useContext(AppContext);

  return (
    <div className="footer">
      <li>{footerData.title}</li>
      <li>{footerData.number}</li>
      <li>{footerData.email}</li>
      <li>{footerData.adres}</li>
      <li>{getCurrentDateTime()}</li>
    </div>
  );
}

export default Footer;

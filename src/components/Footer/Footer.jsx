import './footer.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function Footer() {
  const { footerData, loadingFooterData } = useContext(AppContext);
  const { getCurrentDateTime } = useContext(AppContext);

  return (
    <div className="footer">
      <li>
        {' '}
        {loadingFooterData && !footerData.length && (
          <h2 className="footer-kraunasi"></h2>
        )}
        {footerData.title}
      </li>
      <li>
        {' '}
        {loadingFooterData && !footerData.length && (
          <h2 className="footer-kraunasi"></h2>
        )}
        {footerData.number}
      </li>
      <li>
        {' '}
        {loadingFooterData && !footerData.length && (
          <h2 className="footer-kraunasi"></h2>
        )}
        {footerData.email}
      </li>
      <li>
        {' '}
        {loadingFooterData && !footerData.length && (
          <h2 className="footer-kraunasi"></h2>
        )}
        {footerData.adres}
      </li>
      <li>{getCurrentDateTime()}</li>
    </div>
  );
}

export default Footer;

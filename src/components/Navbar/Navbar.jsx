import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faHouse,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <>
      <div className="nav-info">
        <a href="https://www.facebook.com/masaulis">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="">
          <FontAwesomeIcon icon={faMobileScreenButton} /> +37065796289
        </a>
        <a href="">
          <FontAwesomeIcon icon={faEnvelope} /> mbmasaulis@gmail.com
        </a>
        <a href="">
          <FontAwesomeIcon icon={faHouse} /> MB Masaulis
        </a>
      </div>
      <nav>
        <h1>Masaulis.lt</h1>

        <li>
          <NavLink to="/">Pagrindinis</NavLink>
        </li>
        <li>
          <NavLink to="/paslaugos">Paslaugos</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/galerija">Galerija</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/apiemus">Apie Mus</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/kontaktai">Kontaktai</NavLink>
        </li>
      </nav>
    </>
  );
}

export default Navbar;

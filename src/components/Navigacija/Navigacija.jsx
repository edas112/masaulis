import './navigacija.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faHouse,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigacija() {
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
      <Navbar expand="lg" className="nav">
        <Navbar.Brand>
          <h1 className="logo">Masaulis.lt</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: 'var(--Tiffany-Blue)',
            color: 'var(--Light-green)',
            marginRight: '3rem',
          }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="nav-links" to="/">
              Pagrindinis
            </NavLink>
            <NavLink className="nav-links" to="/paslaugos">
              Paslaugos
            </NavLink>
            <NavLink className="nav-links" to="/galerija">
              Galerija
            </NavLink>
            <NavLink className="nav-links" to="/apiemus">
              Apie Mus
            </NavLink>
            <NavLink className="nav-links" to="/kontaktai">
              Kontaktai
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigacija;

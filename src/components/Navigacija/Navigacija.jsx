import './navigacija.scss';
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
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigacija() {
  return (
    <>
      <div className="nav-info">
        <a href="https://www.facebook.com/masaulis">
          <FontAwesomeIcon icon={faFacebook} />
          <span>Facebook</span>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          <span>+37065796289</span>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>mbmasaulis@gmail.com</span>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faHouse} />
          <span>MB Masaulis</span>
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
        <Navbar.Offcanvas aria-labelledby>
          <Offcanvas.Header
            closeButton
            style={{ backgroundColor: 'var(--Tiffany-Blue)' }}
          >
            <Offcanvas.Title
              style={{
                color: 'var(--Feldgrau)',
                fontSize: '30px',
              }}
            >
              MB Masaulis
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              backgroundColor: 'var(--Feldgrau)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default Navigacija;

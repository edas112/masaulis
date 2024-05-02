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
import { useState } from 'react';
import Logo from './Logo/Logo';

function Navigacija() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-info">
        <a href="https://www.facebook.com/masaulis">
          <FontAwesomeIcon icon={faFacebook} />
          <span>Facebook</span>
        </a>
        <a href="tel:+37065796289">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          <span>+37065796289</span>
        </a>
        <a href="mailto:mbmasaulis@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>mbmasaulis@gmail.com</span>
        </a>
        <a href="https://masaulis.netlify.app/">
          <FontAwesomeIcon icon={faHouse} />
          <span>MB Masaulis</span>
        </a>
      </div>
      <Navbar expand="lg" className="nav">
        <Navbar.Brand>
          <h1 className="logo">
            <Logo />
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-toggle"
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: 'var(--Tiffany-Blue)',
            color: 'var(--Light-green)',
            marginRight: '3rem',
          }}
          onClick={handleShow}
        />
        <Navbar.Offcanvas show={show} onHide={handleClose} aria-labelledby>
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
              <NavLink className="nav-links" to="/" onClick={handleClose}>
                Pagrindinis
              </NavLink>
              <NavLink
                className="nav-links"
                to="/paslaugos"
                onClick={handleClose}
              >
                Paslaugos
              </NavLink>
              <NavLink
                className="nav-links"
                to="/galerija"
                onClick={handleClose}
              >
                Galerija
              </NavLink>
              <NavLink
                className="nav-links"
                to="/kontaktai"
                onClick={handleClose}
              >
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

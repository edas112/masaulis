import { useState, useContext } from 'react';
import {
  Spinner,
  Offcanvas,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { cfg } from '../../cfg/cfg';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';
import SukurtiPaslauga from '../Admin/SukurtiPaslauga/SukurtiPaslauga';
import Footeris from '../Admin/Footeris/Footeris';
import './admin.scss';

function AdminUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useAuth();
  const { showLogin, setShowLogin } = useContext(AppContext);
  const handleClose = () => {
    setShowLogin(false);
    setValidated(false);
    setUsername('');
    setPassword('');
  };
  const handleShow = () => setShowLogin(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      if (error) setError(false);

      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Username or password incorrect');

      const user = await response.json();
      console.log(user);
      if (user.token) {
        setToken(user.token);
        handleClose();
      }
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user container" onClick={handleShow}>
        <h3>Masaulis</h3>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div>
        <SukurtiPaslauga />
        <Footeris />
      </div>
      <Offcanvas show={showLogin} onHide={handleClose} placement="end">
        {token ? (
          <>
            <Offcanvas.Header
              closeButton
              style={{ backgroundColor: 'var(--Feldgrau)' }}
              color="var(--Tiffany-Blue)"
            >
              <Offcanvas.Title
                style={{
                  color: 'var(--Tiffany-Blue)',
                  fontSize: '30px',
                }}
              >
                Prisijungėte
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: 'var(--Tiffany-Blue)' }}>
              Galite redaguoti sveitainės tūrynį
            </Offcanvas.Body>
          </>
        ) : (
          <>
            <Offcanvas.Header
              style={{ backgroundColor: 'var(--Feldgrau)' }}
              color="var(--Tiffany-Blue)"
              closeButton
            >
              <Offcanvas.Title>Prisijunkite</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: 'var(--Tiffany-Blue)' }}>
              {error && (
                <Alert variant="danger">Jūsų vartotojas neegzistuoja</Alert>
              )}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Vartotojo vardas</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="vartotojo vardas"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Vartotojo vardas yra privalomas
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row style={{ marginTop: '1rem' }}>
                  <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Slaptažodis</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="slaptažodis"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Slaptažodis yra privalomas!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button className='btn' type="submit" disabled={loading}>
                  Login
                </Button>
                {loading && <Spinner animation="border" variant="primary" />}
              </Form>
            </Offcanvas.Body>
          </>
        )}
      </Offcanvas>
    </>
  );
}

export default AdminUser;

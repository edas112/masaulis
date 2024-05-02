import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container, Button, Spinner, Alert } from 'react-bootstrap';
import { cfg } from '../../../cfg/cfg';
import './footeris.scss';
import useAuth from '../../../hooks/useAuth';
import { AppContext } from '../../../context/AppContext';

function Footeris() {
  const [luoding, setLouding] = useState(false);
  const [validated, setValidate] = useState(false);
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [adres, setAdres] = useState('');
  const [status, setStatus] = useState({
    value: null,
    message: '',
  });
  const { token, setToken } = useAuth();
  const { fetchData, setShowLogin } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidate(true);

    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    try {
      setLouding(true);
      const data = {
        title,
        number,
        email,
        adres,
      };

      const response = await fetch(
        `${cfg.API.HOST}/footer/66295e97b6844bcb60e2b1b2`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      const product = response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setToken(null);
          setShowLogin(true);
          alert('Prisijunkite');
        }

        throw new Error(product.error);
      }
      setStatus({ value: 'Pavyko', message: 'Footeris redaguotas' });
      fetchData();
    } catch (error) {
      console.log('eror', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Redaguoti nepavyko',
      });
    } finally {
      setLouding(false);
    }
  };
  return (
    <div className="container footeris">
      <h1>Pakeisti Footerio duomenis</h1>
      <Container className="lygiavimas">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Įmonės pavadinimas</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="pavadinimas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Pavadinimas būtinas
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Telefono numeris</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="numeris"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Telefono numeris būtinas
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>El. pašto adresas</Form.Label>
              <Form.Control
                type="text"
                placeholder="el. pašto adresas"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                El. pašto adresas būtinas
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Įmonės adresas</Form.Label>
              <Form.Control
                type="text"
                placeholder="adresas"
                value={adres}
                onChange={(e) => setAdres(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Adresas būtinas
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={luoding}>
            Pakeisti Footerio duomenis
          </Button>
          {luoding && <h2 className="admin-kraunasi"></h2>}
        </Form>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
      </Container>
    </div>
  );
}

export default Footeris;

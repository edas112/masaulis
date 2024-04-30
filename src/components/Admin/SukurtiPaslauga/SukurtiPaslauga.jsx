import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container, Button, Spinner, Alert } from 'react-bootstrap';
import { cfg } from '../../../cfg/cfg';
import './sukurtiPaslauga.scss';
import useAuth from '../../../hooks/useAuth';
import { AppContext } from '../../../context/AppContext';

function SukurtiPaslauga() {
  const [luoding, setLouding] = useState(false);
  const [validated, setValidate] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
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

    console.log('created');

    try {
      setLouding(true);
      const data = {
        title,
        description,
      };

      if (img.trim()) data.img = img;

      const response = await fetch(`${cfg.API.HOST}/kortele`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const product = response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setToken(null);
          setShowLogin(true);
          alert('Please login');
        }

        throw new Error(product.error);
      }
      setStatus({ value: 'sussecc', message: 'Paslauga sukurta' });
      fetchData();
    } catch (error) {
      console.log('eror', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Paslauga neukurta',
      });
    } finally {
      setLouding(false);
    }
  };
  return (
    <div className="container paslauga">
      <h1>Pridėti paslauga</h1>
      <Container className="lygiavimas">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Paslaugos pavadinimas</Form.Label>
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
              <Form.Label>Paslaugos aprašymas</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="aprašymas"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Paslaugos nuotrauka</Form.Label>
              <Form.Control
                type="text"
                placeholder="nuotrauka"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <Form.Control.Feedback>Gerai!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button className="btn" type="submit" disabled={luoding}>
            Sukurti Paslaugą
          </Button>
          {luoding && <Spinner animation="grow" variant="dark" />}
        </Form>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
      </Container>
    </div>
  );
}

export default SukurtiPaslauga;

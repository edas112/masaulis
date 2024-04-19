import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './admin.scss';

function Admin() {
  return (
    <Form className="form container">
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Prisijungimo vardas</Form.Label>
        <Form.Control type="username" placeholder="Prisijungimo vardas" />
        <Form.Text className="text-muted">
          Įveskite prisijungimo vardą
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Slaptažodis</Form.Label>
        <Form.Control type="password" placeholder="Slaptažodis" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Patikrinkite mane" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Prisijungti
      </Button>
    </Form>
  );
}

export default Admin;

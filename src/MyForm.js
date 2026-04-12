import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function MyForm() {
  return (
    <Form id="form" className="w-50 mx-auto mb-5">
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Product Type</Form.Label>
        <Form.Select>
          <option>Fruit</option>
          <option>Vegetable</option>
        </Form.Select>
      </Form.Group>

      <Form.Label>Product Cost</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control placeholder="Enter cost" />
      </InputGroup>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}

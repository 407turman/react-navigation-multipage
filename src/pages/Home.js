import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function Home() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item: ${item}, Quantity: ${qty}`);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page.</p>

      {/* ---------------- BOOTSTRAP TABLE ---------------- */}
      <Table striped bordered hover className="mt-4" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Laptop</td>
            <td>4</td>
            <td>Office</td>
          </tr>

          <tr>
            <td>Monitor</td>
            <td>10</td>
            <td>Storage</td>
          </tr>

          <tr>
            <td>Keyboard</td>
            <td>15</td>
            <td>Warehouse</td>
          </tr>
        </tbody>
      </Table>

      {/* ---------------- BOOTSTRAP FORM ---------------- */}
      <Form onSubmit={handleSubmit} className="mt-4" style={{ width: "50%" }}>
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter item name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="Enter quantity"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Home;

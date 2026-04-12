import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us.</p>

      <Form className="w-50 mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Form submitted with Email: ${formData.email}`);
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3 className="text-center mb-4">Login Form</h3>
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          {/* Email Field */}
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-4 w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default FormComponent;

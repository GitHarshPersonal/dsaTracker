import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const host = "http://localhost:5000";

  const [user, setUser] = useState({ email: "", password: "" });

  // bootstrap validation
  const [validated, setValidated] = useState(false);
  // bootstrap validation

  const userLogin = async (e) => {

    // bootstrap validation
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    // bootstrap validation

    e.preventDefault();
    // API call
    console.log(user);
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-4">
      <h2 className="my-3">Login to Your Account</h2>
      <Form onSubmit={userLogin} noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose an email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
              minLength={5}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be atleast 5 characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button variant="primary mx-2" type="submit">
          Login
        </Button>
          or
        <Link to='/signup' className="btn btn-primary mx-2">
          Sign Up
        </Link>
      </Form>
    </Container>
  );
};

export default Login;

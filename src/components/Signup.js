import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // bootstrap validation
  const [validated, setValidated] = useState(false);
  // bootstrap validation

  const userSignUp = async (e) => {
    // bootstrap validation
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    // bootstrap validation

    // matching password and confirmed password
    if (user.password !== user.cpassword) {
      alert("password and confirmed passwords are different");
      e.stopPropagation();
    }

    e.preventDefault();
    // API call
    console.log(user);
    const response = await fetch(`${host}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
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
      <h2 className="my-3">Create a New Account</h2>
      <Form onSubmit={userSignUp} noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="name"
              onChange={handleOnChange}
              minLength={3}
              required
            />
            <Form.Control.Feedback>
              Please give a name with atleast three characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChange}
              required
            />
            <Form.Control.Feedback>
              Please provide a valid email.
            </Form.Control.Feedback>
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              placeholder="Password"
              name="cpassword"
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
          Sign Up
        </Button>
         or
        <Link to='/login' className='btn btn-primary mx-2'>
          Login
        </Link>
      </Form>
    </Container>
  );
};

export default Signup;

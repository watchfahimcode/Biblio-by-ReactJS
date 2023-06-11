import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegister = () => {
    // Perform registration functionality using the form data
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-80">
      <div className="register-form shadow p-4">
        <h1>Register</h1>
        <Form>
          <Form.Group>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              type="text"
              value={fullname}
              onChange={handleFullnameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender:</Form.Label>
            <Form.Control
              as="select"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

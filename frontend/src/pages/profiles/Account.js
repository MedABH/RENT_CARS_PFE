import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = jwtDecode(token);
      setUser(userData.user);
      setFormData(userData.user);
      setUserId(userData.user.id);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log('Form Data:', JSON.stringify(formData, null, 2)); // Log the form data
      console.log('User ID:', userId); // Log the user ID
  
      const response = await axios.put(`http://localhost:3000/api/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setUser(response.data.user);
      alert('Information updated successfully');
    } catch (error) {
      console.error('Update Error:', error);
      console.error('Response Data:', error.response?.data); // Log the response data from the server
      alert('Failed to update information');
    }
  };
  

  return (
    <Container className="mt-5" style={{ marginBottom: '35px' }}>
      <h1>Account Information</h1>
      <Row>
        <Col md={6}>
          {user && (
            <Form onSubmit={handleSubmit}>
              {user.checkt === 'client' ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="nump"
                      value={formData.nump || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              ) : user.checkt === 'entreprise' ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Agency Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="nameagence"
                      value={formData.nameagence || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="nump"
                      value={formData.nump || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number (Fix)</Form.Label>
                    <Form.Control
                      type="text"
                      name="numf"
                      value={formData.numf || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              ) : (
                <p>Unknown account type</p>
              )}
              <Button variant="primary" type="submit">
                Update Information
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Account;

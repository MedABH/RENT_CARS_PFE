import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState('');
  const [clientRequests, setClientRequests] = useState([]);
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = jwtDecode(token);
      setUser(userData.user);
      setFormData(userData.user);
      setUserId(userData.user.id);
    }
  }, []);

  useEffect(() => {
    if (user && user.checkt === 'entreprise') {
      const fetchRequests = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:3000/api/reservations`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setClientRequests(response.data);
        } catch (error) {
          console.error('Fetch Requests Error:', error);
        }
      };

      fetchRequests();
    }

    if (user && user.checkt === 'client') {
      const fetchReservations = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:3000/api/reservations`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userReservations = response.data.filter(reservation => reservation.email === user.email);
          setUserReservations(userReservations);
        } catch (error) {
          console.error('Fetch Reservations Error:', error);
        }
      };

      fetchReservations();
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:3000/api/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setUser(response.data.user);
      alert('Information updated successfully');
    } catch (error) {
      console.error('Update Error:', error);
      console.error('Response Data:', error.response?.data);
      alert('Failed to update information');
    }
  };

  const handleRequestAction = async (requestId, action) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:3000/api/reservations/${requestId}`, { status: action }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setClientRequests((prevRequests) => 
        prevRequests.map((request) => 
          request._id === requestId ? { ...request, status: action } : request
        )
      );

      alert(`Request ${action ? 'accepted' : 'rejected'} successfully`);
    } catch (error) {
      console.error('Request Action Error:', error);
      alert('Failed to update request status');
    }
  };

  return (
    <Container className="mt-5" style={{ marginBottom: '35px' }}>
      <h1>Account Information</h1>
      {user && (
      <Row>
        <Col md={6}>
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
                    value={"0" + formData.nump || ''}
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
                    value={"0" + formData.nump || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number (Fix)</Form.Label>
                  <Form.Control
                    type="text"
                    name="numf"
                    value={"0" + formData.numf || ''}
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
        </Col>
        <Col md={6}>
          <Row>
            <h2>Reservation Details</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Car Name</th>
                  <th>Agency</th>
                  <th>City</th>
                  <th>Pickup Date</th>
                  <th>Return Date</th>
                </tr>
              </thead>
              <tbody>
                {userReservations.map((reservation, index) => (
                  <tr key={reservation._id}>
                    <td>{index + 1}</td>
                    <td>{reservation.nameCar}</td>
                    <td>{reservation.nameagence}</td>
                    <td>{reservation.city}</td>
                    <td>{reservation.pickupDate}</td>
                    <td>{reservation.returnDate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          {user.checkt === 'entreprise' && (
            <Row style={{marginTop:'25px'}}>
              <h2>Client Requests</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Client Name</th>
                    <th>Request Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clientRequests && clientRequests.length > 0 ? (
                    clientRequests.map((request, index) => (
                      <tr key={request._id}>
                        <td>{index + 1}</td>
                        <td>{request.nameUser}<br/>{request.nump}<br/>{request.email}</td>
                        <td>{request.nameCar}<br/>{request.message}</td>
                        <td>
                          <Button 
                            variant="success" 
                            onClick={() => handleRequestAction(request._id, true)}
                          >
                            Accept
                          </Button>
                          {' '}
                          <Button 
                            variant="danger" 
                            onClick={() => handleRequestAction(request._id, false)}
                          >
                            Reject
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No requests found</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Row>
          )}
        </Col>
      </Row>
    )}
    </Container>
  );
};

export default Account;
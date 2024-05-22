import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    checkt: '',
    name: '',
    nameagence: '',
    nump: '',
    numf: '',
    email: '',
    password: '',
    carteb: '',
    cartenf: '',
    cartenb: '',
    reg: '',
    accepted: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, reg: file });
  };

  return (
    <Container className="mt-5">
      <br/>
      <Form onSubmit={handleSubmit}>
        <div className='row' style={{width:'100%', height:'80px'}}>
          <div className='col' style={{ backgroundColor: '', width:'100%', height:'50%'}}>
            <button name="checkt" onClick={() => setFormData({ ...formData, checkt: 'client' })} className='col-5' style={{color:'white', border:'1', borderColor:'black', width:'40%', marginRight:'54px', marginLeft:'54px', height:'100%'}}>Client</button>
            <button name="checkt" onClick={() => setFormData({ ...formData, checkt: 'entreprise' })} className='col-5' style={{color:'white', border:'1', borderColor:'black', width:'40%', marginLeft:'54px', marginRight:'54px', height:'100%'}}>Agence</button>
          </div>
        </div>

        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="agenceName">
            <Form.Label>Agence Name</Form.Label>
            <Form.Control
              type="text"
              name="nameagence"
              value={formData.nameagence}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        <Form.Group controlId="numberPhone">
          <Form.Label>Number Phone</Form.Label>
          <Form.Control
            type="number"
            name="nump"
            value={formData.nump}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="numberFix">
            <Form.Label>Number Phone Fix</Form.Label>
            <Form.Control
              type="number"
              name="numf"
              value={formData.numf}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="carteBank">
            <Form.Label>Formulaire de Paiement</Form.Label>
            <Form.Control
              type="text"
              name="carteb"
              value={formData.carteb}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="image">
            <Form.Label>Image de Reg</Form.Label>
            <Form.Control
              type="file"
              name="reg"
              onChange={handleImageChange}
              accept="image/*"
            />
          </Form.Group>
        )}

        <Form.Group controlId="checkAccepted">
          <Form.Label></Form.Label>
          <Form.Check
            type="checkbox"
            name="accepted"
            label="Accepter les règles"
            checked={formData.accepted}
            onChange={(e) => setFormData({ ...formData, accepted: e.target.checked })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;

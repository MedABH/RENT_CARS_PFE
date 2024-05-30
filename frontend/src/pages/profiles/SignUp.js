import React, { useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    checkt: 'client',
    name: '',
    nameagence: '',
    nump: '',
    numf: '',
    email: '',
    password: '',
    carteb: '',
    cartenf: '',
    cartenb: '',
    city: '',
    address: '',
    reg: '',
    accepted: false,
  });

  const navigate = useNavigate(); // Initialisez le hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
  
    try {
      const response = await axios.post("http://localhost:3000/api/users", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, reg: file });
  };

  // List of cities in Morocco (you can replace it with a more comprehensive list)
  const moroccanCities = [
  'Agadir',
  'Al Hoceima',
  'Azrou',
  'Beni Mellal',
  'Berkane',
  'Boujdour',
  'Bouznika',
  'Casablanca',
  'Chefchaouen',
  'Dakhla',
  'El Aioun',
  'El Jadida',
  'Errachidia',
  'Essaouira',
  'Fes',
  'Guelmim',
  'Ifrane',
  'Kenitra',
  'Khemisset',
  'Khenifra',
  'Khouribga',
  'Laayoune',
  'Larache',
  'Marrakech',
  'Meknes',
  'Mohammedia',
  'Nador',
  'Ouarzazate',
  'Oujda',
  'Rabat',
  'Safi',
  'Salé',
  'Sefrou',
  'Settat',
  'Sidi Kacem',
  'Sidi Slimane',
  'Skhirat',
  'Tangier',
  'Taroudant',
  'Taza',
  'Tétouan',
  'Tiznit',
  ];

  return (
    <Container className="mt-5">
      <br />
      <Form onSubmit={handleSubmit}>
        <div className='row' style={{ width: '100%', height: '80px' }}>
          <div className='col' style={{ backgroundColor: '', width: '100%', height: '50%' }}>
            <button name="checkt" onClick={() => setFormData({ ...formData, checkt: 'client' })} className='col-5 btn-custom' style={{
              backgroundColor: 'red',
              color: 'white',
              border: '1px solid black',
              width: '40%',
              marginRight: '54px',
              marginLeft: '54px',
              height: '100%'
            }}>Client</button>
            <button name="checkt" onClick={() => setFormData({ ...formData, checkt: 'entreprise' })} className='col-5 btn-custom' style={{backgroundColor: 'red', color: 'white', border: '1 solid black', width: '40%', marginLeft: '54px', marginRight: '54px', height: '100%' }}>Agency</button>
          </div>
        </div>
        
        {formData.checkt === 'client' && (
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
        )}

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="agenceName">
            <Form.Label>Agency Name</Form.Label>
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
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {moroccanCities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </Form.Control>
          </Form.Group>
        )}

        {formData.checkt === 'entreprise' && (
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        )}

        {formData.checkt === 'entreprise' && (
          <Form.Group controlId="image">
            <Form.Label>Commercial Register</Form.Label>
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
            label="Accept the rules"
            checked={formData.accepted}
            onChange={(e) => setFormData({ ...formData, accepted: e.target.checked })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <br/>
    </Container>
  );
};

export default SignUp;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";


const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reservationData, setReservationData] = useState({
    nameUser: "",
    nameCar: "",
    nameagence: "",
    city: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    rentPerDay: "",
    image: "",
    email: "",
    nump: "",
    message: ""
  });

  const navigate = useNavigate();

   // Fetch account data from token
   const fetchAccountData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        const userData = jwtDecode(token);
        return userData.user || {};
    }
    return {};
};

useEffect(() => {
    const initializeCarData = async () => {
        const accountData = await fetchAccountData();
        setReservationData((prevData) => ({
            ...prevData,
            nameUser: accountData.name || '',
            email: accountData.email || '',
            nump: accountData.nump || ''
        }));
    };

    initializeCarData();
}, []);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cars/${id}`);
        setCar(response.data);
        setReservationData(prevData => ({ ...prevData, nameCar: response.data.name, nameagence: response.data.nameagence, city: response.data.city, rentPerDay: response.data.rentPerDay, image: response.data.image }));
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCar();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRentNow = () => {
    setShowModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log("Submitting reservation data:", reservationData); // Log data before submission
        await axios.post('http://localhost:3000/api/reservations', reservationData);
        alert('Reservation successful!');
        setShowModal(false);
    } catch (error) {
        console.error('Error making reservation:', error.response ? error.response.data : error.message);
        alert('Reservation failed. Please try again later.');
    }
};


  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto">
            <img src={car.image} alt={car.name} height="400px" width="300px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{car.name}</h1>
            <small><strong>Agence name: {car.nameagence}</strong></small>
            <hr />
            <h2 className="my-4">{car.rentPerDay} MAD per day</h2>
            <p className="lead">{car.desc}</p>
            <button onClick={handleRentNow} className="btn btn-outline-primary my-5">Rent Now</button>
          </div>
        </div>
        <br />
        <br />

        <Modal show={showModal} onHide={() => setShowModal(false)} style={{height:''}} centered>
        <Container style={{backgroundColor:'#FAFAFA',  height:'100%'}}>
          <Modal.Header closeButton>
            <Modal.Title style={{marginLeft:'155px'}}>Rent Now</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{marginTop:'15px'}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={reservationData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber" style={{marginTop:'15px'}}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="nump"
                  value={"0" + reservationData.nump}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" style={{marginTop:'15px'}}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={reservationData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3" style={{width:'100px'}}>
                Send
              </Button>
            </Form>
          </Modal.Body>
          </Container>
        </Modal>
      </div>
    </div>
  );
};

export default CarDetail;

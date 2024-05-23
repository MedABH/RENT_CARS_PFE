import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [reservationData, setReservationData] = useState({
    nameUser: "", // You can set these values based on your user's data
    nameCar: "", // Filled in when car data is fetched
    nameagence: "", // Update this if needed
    city: "", // Update this if needed
    pickupDate: "", // Update this if needed
    pickupTime: "", // Update this if needed
    returnDate: "", // Update this if needed
    returnTime: "" // Update this if needed
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cars/${id}`);
        setCar(response.data);
        // Set the car name when fetched
        setReservationData(prevData => ({ ...prevData, nameCar: response.data.name }));
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCar();
  }, [id]);

  const handleRentNow = async () => {
    try {
      // Send reservation data to MongoDB
      await axios.post('http://localhost:3000/api/reservations', reservationData);
      alert('Reservation successful!');
      // Optionally, you can redirect the user to a confirmation page or do other actions
    } catch (error) {
      console.error('Error making reservation:', error);
      alert('Reservation failed. Please try again later.');
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto">
          <img src={car.image} alt={car.name} height="400px" width="300px" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">{car.name}</h1>
          <small>Agence name: {car.nameagence}</small>
          <hr />
          <h2 className="my-4">{car.rentPerDay} MAD per day</h2>
          <p className="lead">{car.desc}</p>
          {/* Add more details as needed */}
          <button onClick={handleRentNow} className="btn btn-outline-primary my-5">Rent Now</button> {/* Changed button text and added onClick handler */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarDetail;

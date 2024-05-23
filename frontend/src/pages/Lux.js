import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Lux = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  const cardItem = (car) => {
    return (
      <div className="card my-5 py-4" key={car._id} style={{ width: "18rem" }}>
        <img src={car.image} className="card-img-top" alt={car.name} />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ color: 'white' }}>{car.name}</h5>
          <p className="lead" style={{ color: 'white' }}>{car.rentPerDay} MAD per day</p>
          <NavLink to={`/cars/${car._id}`} className="btn btn-outline-primary">Rent Now</NavLink>
        </div>
      </div>
    );
  };

  // Filter cars by type "luxury"
  const luxuryCars = cars.filter(car => car.type === 'luxury');

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Luxury Cars</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {luxuryCars.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Lux;

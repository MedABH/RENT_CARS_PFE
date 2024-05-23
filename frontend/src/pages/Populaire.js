import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
        <img src={car.image} className="card-img-top" alt={car.name} style={{height:'', width:''}} />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ color: 'white' }}>{car.name}</h5>
          <p className="lead" style={{ color: 'white' }}>{car.rentPerDay} MAD per day</p>
          <NavLink to={`/cars/${car._id}`} className="btn btn-outline-primary">Rent Now</NavLink>
        </div>
      </div>
    );
  };

  // Slice the cars array based on the current page
  const itemsPerPage = 6;
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const displayedCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Calculate total number of pages
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Cars</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {displayedCars.map(cardItem)}
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className="btn btn-outline-primary mx-2"
              onClick={() => handlePageChange(i + 1)}
              disabled={currentPage === i + 1}
              style={{width:'8px', height:'8px', borderColor:'red', color:'red'}}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

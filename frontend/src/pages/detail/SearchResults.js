import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, NavLink } from 'react-router-dom';

function SearchResults() {
    const [cars, setCars] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');
    const location = useLocation();
    const { formData } = location.state || {};

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

    const filterCars = () => {
        if (!formData) {
            return [];
        }

        let filteredCars = cars;

        // Vérifiez le lieu d'abord
        if (formData.lieu && formData.lieu.trim() !== '') {
            filteredCars = filteredCars.filter(car => 
                car.city && car.city.toLowerCase().includes(formData.lieu.toLowerCase())
            );
        }

        // Filtrez par type de voiture ensuite
        if (formData.luxury || formData.offRoad || formData.standard) {
            filteredCars = filteredCars.filter(car => {
                if (formData.luxury && car.type === 'luxury') return true;
                if (formData.offRoad && car.type === 'off road') return true;
                if (formData.standard && car.type === 'standard') return true;
                return false;
            });
        }

        // Tri des voitures en fonction du critère de tri
        if (sortCriteria === 'price') {
            filteredCars = filteredCars.sort((a, b) => a.rentPerDay - b.rentPerDay);
        } else if (sortCriteria === 'popularity') {
            filteredCars = filteredCars.sort((a, b) => b.populaire - a.populaire);
        }

        return filteredCars;
    };

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

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

    const filteredCars = filterCars();

    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Search Results</h1>
                        <hr />
                    </div>
                    <div className="col-12 text-center">
                    <h6>Sort By :</h6>
                        <select onChange={handleSortChange} value={sortCriteria} className="form-select" style={{ width: "200px", margin: "0 auto" }}>
                            <option value=""></option>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {filteredCars.length > 0 ? filteredCars.map(cardItem) : <p>No cars found.</p>}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Populaire = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/cars'); // Adjust the URL as necessary
                setCars(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car._id}>
                        {car.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Populaire;

import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AddCarDashboard = () => {
    const [carData, setCarData] = useState({
        name: '',
        nameagence: '',
        desc: '',
        image: null,
        capacity: '',
        fuelType: '',
        rentPerDay: '',
        city: '',
        type: '',
        populaire: '0'
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
            setCarData((prevData) => ({
                ...prevData,
                nameagence: accountData.nameagence || '',
                city: accountData.city || ''
            }));
        };

        initializeCarData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({
            ...carData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCarData({ ...carData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting car data:', carData);

        const formData = new FormData();
        for (const key in carData) {
            formData.append(key, carData[key]);
        }

        try {
            const response = await axios.post('http://localhost:3000/api/cars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Car added successfully:', response.data);
            // You can reset the form here or show a success message
            navigate('/');
        } catch (error) {
            console.error('Error adding car:', error.response ? error.response.data : error.message);
            // Handle the error (e.g., show an error message)
        }
    };

    return (
        <Container className="mt-5" style={{ marginBottom: '40px' }}>
            <br />
            <h2>Add New Car</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={carData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                        as="select"
                        name="type"
                        value={carData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="luxury">Luxury</option>
                        <option value="off road">Off Road</option>
                        <option value="standard">Standard</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="desc"
                        value={carData.desc}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price (MAD per day)</Form.Label>
                    <Form.Control
                        type="number"
                        name="rentPerDay"
                        value={carData.rentPerDay}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="capacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control
                        type="number"
                        name="capacity"
                        value={carData.capacity}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="fuelType">
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="fuelType"
                        value={carData.fuelType}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginTop: '15px' }}>
                    Add Car
                </Button>
            </Form>
            <br />
        </Container>
    );
};

export default AddCarDashboard;

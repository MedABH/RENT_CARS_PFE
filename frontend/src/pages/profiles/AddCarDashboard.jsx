// AddCarDashboard.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddCarDashboard = () => {
    const [carData, setCarData] = useState({
        title: '',
        description: '',
        price: '',
        image: null,
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(carData);
        // Handle the form submission logic (e.g., sending data to the backend)
    };

    return (
        <Container className="mt-5">
            <h2>Add New Car</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={carData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={carData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={carData.price}
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
                <Button variant="primary" type="submit">
                    Add Car
                </Button>
            </Form>
        </Container>
    );
};

export default AddCarDashboard;

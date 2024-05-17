const express = require('express');
const mongoose = require('mongoose');
const Cars = require('../models/carModel.js');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/location_db")
    .then(() => {
        console.log("connected succes DB !");
        app.listen(3000, () => {
            console.log('listening 3000 !!!');
        });
    })
    .catch(() => {
        console.log("errer to connect DB !")
    });

//post new car:
app.post('/api/car', async (req, res) => {
    try {
        const car = await Cars.create(req.body);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//show all cars:
app.get('/api/cars', async (req, res) => {
    try {
        const car = await Cars.find({});
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//find one car by id:
app.get('/api/car/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Cars.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//first page html:
app.get('/', (req, res) => {
    res.send("Hello dev API sending !!!");
});

//update api:
app.put('/api/car/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const car = await Cars.findByIdAndUpdate(id, req.body);
        if (!car) {
            return res.status(404).json({message:"Product not found"});
        }
        const updateCar = await Cars.findById(id);
       res.status(200).json(updateCar);
    } catch (error) {
       res.status(500).json({message: error.message});
    }
});

//delete car:
app.delete('/api/car/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Cars.findByIdAndDelete(id);
        if (!car) {
            returnres.status(404).json({message: "Car not found"});
        }
       res.status(200).json({message: "Car deleted succesfully"});
    } catch (error) {
       res.status(500).json({message: error.message});
    }
});
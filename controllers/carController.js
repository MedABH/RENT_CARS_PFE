const Cars = require('../models/carModel.js');


const getCars = async (req, res) => {
    try {
        const car = await Cars.find({});
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Cars.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postCar = async (req, res) => {
    try {
        const car = await Cars.create(req.body);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCar = async (req, res) => {
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
};

const deleteCar = async (req, res) => {
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
};


module.exports = {
    getCars,
    getCar,
    postCar,
    updateCar,
    deleteCar
};
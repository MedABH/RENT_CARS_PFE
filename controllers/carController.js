const Cars = require('../models/carModel.js');
require('dotenv').config();
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const upload = multer(); // Memory storage for multer

const storage = new Storage({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});
const bucket = storage.bucket(process.env.FIREBASE_BUCKET_NAME);

// File Upload Function
const uploadToFirebase = (file) => {
    const destination = file.originalname; // You can adjust the destination path if needed
    const fileUpload = bucket.file(destination);

    const stream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype
        }
    });

    return new Promise((resolve, reject) => {
        stream.on('error', (error) => {
            reject(error);
        });

        stream.on('finish', async () => {
            try {
                await fileUpload.makePublic(); // Make the uploaded file public
                const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`; // Construct the URL
                resolve(url); // Resolve with the URL
            } catch (error) {
                reject(error);
            }
        });

        stream.end(file.buffer);
    });
};


// Get all cars
const getCars = async (req, res) => {
    try {
        const car = await Cars.find({});
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific car by ID
const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Cars.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new car
{/*const postCar = async (req, res) => {
    try {
        let fileUrl = '';
        if (req.file) {
            fileUrl = await uploadToFirebase(req.file);
        }
        const carData = { ...req.body, image: fileUrl };
        const car = await Cars.create(carData);
        res.status(200).json(car);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ message: 'Failed to create car' });
    }
};*/}
const postCar = async (req, res) => {
    try {
        let fileUrl = '';
        if (req.file) {
            fileUrl = await uploadToFirebase(req.file);
        }
        const carData = { ...req.body, image: fileUrl }; // Include the Firebase Storage URL in the car data
        const car = await Cars.create(carData); // Save the car data to the database
        res.status(200).json(car);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ message: 'Failed to create car' });
    }
};


// Update a car by ID
const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Cars.findByIdAndUpdate(id, req.body, { new: true }); // Set { new: true } to return the updated document

        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a car by ID
const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Cars.findByIdAndDelete(id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCars,
    getCar,
    postCar,
    updateCar,
    deleteCar,
    upload
};

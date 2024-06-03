const mongoose = require("mongoose");

// Email validation function
const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const reservationSchema = new mongoose.Schema({
    nameUser: { type: String, required: true },
    nameCar: { type: String, required: true },
    nameagence: { type: String, required: true },
    city: { type: String, required: true },
    pickupDate: { type: String, required: false },
    pickupTime: { type: String, required: false },
    returnDate: { type: String, required: false },
    returnTime: { type: String, required: false },
    rentPerDay: { type: Number, required: true },
    image: { type: String, required: false },
    nump: { type: Number, required: true },
    message: { type: String, required: false },
    email: {
        type: String,
        required: true,
        unique: false, // Temporarily set to false for testing
        validate: [validateEmail, 'Please fill a valid email address']
    }
}, { timestamps: true });

const reservationModel = mongoose.model('reservations', reservationSchema)
module.exports = reservationModel
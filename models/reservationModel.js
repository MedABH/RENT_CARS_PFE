const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({

    nameUser: { type: String, required: true },
    nameCar: { type: String, required: true },
    nameagence: { type: String, required: false },
    city: { type: String, required: false},
    pickupDate: { type: String, required: false},
    pickupTime: { type: String, required: false},
    returnDate: { type: String, required: false},
    returnTime: { type: String, required: false}

}, { timestamps: true }

)
const reservationModel = mongoose.model('reservations', reservationSchema)
module.exports = reservationModel
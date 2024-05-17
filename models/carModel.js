const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name: { type: String, required: true },
    image: { type: String, required: false },
    capacity: { type: Number, required: false },
    fuelType: { type: String, required: false },
    rentPerDay: { type: Number, required: false }


}, { timestamps: true }

)
const carModel = mongoose.model('cars', carSchema)
module.exports = carModel
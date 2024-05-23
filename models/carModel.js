const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name: { type: String, required: true },
    image: { type: String, required: false },
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    rentPerDay: { type: Number, required: true },
    type: {type: String, required: true},
    populaire: {type:Number, required:false}

}, { timestamps: true }

)
const carModel = mongoose.model('cars', carSchema)
module.exports = carModel
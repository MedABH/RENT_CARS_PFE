const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name: { type: String, required: true },
    nameagence: { type: String, required: false },
    city: { type: String, required: false},
    desc: { type: String, required: false},
    image: { type: String, required: false },
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    rentPerDay: { type: Number, required: true },
    city: { type: String, required: false},
    type: {type: String, required: true},
    populaire: {type:Number, required:false}

}, { timestamps: true }

)
const carModel = mongoose.model('cars', carSchema)
module.exports = carModel
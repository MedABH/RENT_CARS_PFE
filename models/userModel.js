const mongoose = require("mongoose");

// Email validation function
const validateEmail = (email) => {
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
};

const userSchema = new mongoose.Schema({
     checkt: { type: String, required: false },
     name: { type: String, required: true },
     nameagence: { type: String, required: false },
     nump: { type: Number, required: true },
     numf: { type: Number, required: false }, // Corrected typo here
     email: {
          type: String,
          required: true,
          validate: [validateEmail, 'Please fill a valid email address']
     },
     password: { type: String, required: true },
     carteb: { type: Boolean, required: false },
     cartenf: { type: String, required: false },
     cartenb: { type: String, required: false },
     reg: { type: String, required: false },
     accepted: { type: Boolean, required: true }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

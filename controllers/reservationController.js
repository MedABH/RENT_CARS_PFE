const reservationModel = require('../models/reservationModel.js');

// Get all reservations
const getReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single reservation by ID
const getReservation = async (req, res) => {
    try {
        const reservation = await reservationModel.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new reservation
const postReservation = async (req, res) => {
    try {
        console.log("Request body:", req.body); // Log request body
        const reservation = await reservationModel.create(req.body);
        res.status(200).json(reservation);
    } catch (error) {
        console.error("Error creating reservation:", error); // Log specific error
        res.status(500).json({ message: error.message });
    }
};


// Update a reservation
const updateReservation = async (req, res) => {
    try {
        const updatedReservation = await reservationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a reservation
const deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await reservationModel.findByIdAndDelete(req.params.id);
        if (!deletedReservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json({ message: "Reservation deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getReservations,
    getReservation,
    postReservation,
    updateReservation,
    deleteReservation
};

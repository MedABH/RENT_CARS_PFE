const express = require("express");
const router = express.Router();
const { getReservations, getReservation, postReservation, updateReservation, deleteReservation } = require('../controllers/reservationController.js');

// Show reservations
router.get("/", getReservations);
router.get("/:id", getReservation);

// Add reservation
router.post("/", postReservation);

// Update reservation
router.put("/:id", updateReservation);

// Delete reservation
router.delete("/:id", deleteReservation);

module.exports = router;

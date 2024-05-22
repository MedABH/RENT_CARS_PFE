const express = require("express");
const router = express.Router();
const {getCars, getCar, postCar, updateCar, deleteCar} = require('../controllers/carController.js')

//show cars:
router.get("/", getCars);
router.get("/:id", getCar);

//add car:
router.post("/", postCar);

//update car:
router.put("/:id", updateCar);

//delete car:
router.delete("/:id", deleteCar);



module.exports = router;
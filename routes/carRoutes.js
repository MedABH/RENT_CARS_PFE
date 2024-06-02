const express = require("express");
const router = express.Router();
const {getCars, getCar, postCar, updateCar, deleteCar} = require('../controllers/carController.js');
const multer = require('multer');
const upload = multer(); // Memory storage for multer

//show cars:
router.get("/", getCars);
router.get("/:id", getCar);

//add car:
router.post("/", upload.single('image'), postCar);

//update car:
router.put("/:id", updateCar);

//delete car:
router.delete("/:id", deleteCar);



module.exports = router;
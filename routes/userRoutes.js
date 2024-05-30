const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer(); // Memory storage for multer
const authController = require('../controllers/authController');

// Route Definitions
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', upload.single('reg'), userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Login route
router.post('/login', authController.login);

module.exports = router;

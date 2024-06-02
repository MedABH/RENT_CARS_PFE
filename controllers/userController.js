require('dotenv').config();
const { Storage } = require('@google-cloud/storage');
const userModel = require('../models/userModel');
const multer = require('multer');
const upload = multer(); // Memory storage for multer

const storage = new Storage({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});
const bucket = storage.bucket(process.env.FIREBASE_BUCKET_NAME);

// File Upload Function
const uploadToFirebase = (file) => {
    const destination = file.originalname; // You can adjust the destination path if needed
    const fileUpload = bucket.file(destination);

    const stream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype
        }
    });

    return new Promise((resolve, reject) => {
        stream.on('error', (error) => {
            reject(error);
        });

        stream.on('finish', () => {
            resolve(destination);
        });

        stream.end(file.buffer);
    });
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error getting all users:', error);
        res.status(500).json({ message: error.message });
    }
};

// Get a single user by ID
const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error getting user by ID:', error);
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        let fileUrl = '';
        if (req.file) {
            fileUrl = await uploadToFirebase(req.file);
        }
        const userData = { ...req.body, reg: fileUrl };
        const user = await userModel.create(userData);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
};

// Update an existing user
const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      console.log('Updating user with ID:', id); // Log the user ID
      console.log('Update Data:', JSON.stringify(updateData, null, 2)); // Log the update data
  
      const updatedUser = await userModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(400).json({ message: error.message });
    }
  };

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    upload
};

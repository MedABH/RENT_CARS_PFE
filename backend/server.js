const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('../routes/carRoutes.js');
const userRoutes = require('../routes/userRoutes');
const reservationRoutes = require('../routes/reservationRoutes.js');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const app = express();



//middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes:
app.use("/api/cars", carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);

//firebase:
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://location-82f7d.appspot.com',
  });

// Démarrer le serveur
mongoose.connect("mongodb://localhost:27017/location_db")
    .then(() => {
        console.log("connected successfully to DB!");
        app.listen(3000, () => {
            console.log('listening on port 3000!');
        });
    })
    .catch(() => {
        console.log("error connecting to DB!");
    });


//first page html:
app.get('/', (req, res) => {
    res.send("Hello dev API sending !!!");
});



const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id,
                checkt: user.checkt,
                email: user.email,
                name: user.name,
                nameagence: user.nameagence,
                nump: user.nump,
                numf: user.numf,
                carteb: user.carteb,
                cartenf: user.cartenf,
                cartenb: user.cartenb,
                city: user.city,
                address: user.address,
                reg: user.reg
            }
        };

        jwt.sign(payload, 'secret', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
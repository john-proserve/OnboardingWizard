require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./src/models/users');
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Function to verify token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Find user and password in database
    User.findOne({ username, password }).then(user => {
        if (user) {
            const token = jwt.sign({ user }, 'secretKey');
            res.json({ token });
        } else {
            res.sendStatus(401);
        }
    });
});

// Protected endpoint
app.get('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (!err) {
            res.json({ message: 'Protected data', authData })
        } else {
            res.sendStatus(403);
        }
    });
});

// Render Html File
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./db');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

// database connection
conn();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
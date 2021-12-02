const express = require('express');
const cors = require('cors');
const db = require('./database/mongoConfig');

const userRoute = require('./routes/userRoute');

require('dotenv-safe').config();

const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);

module.exports = app;
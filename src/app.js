const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/userRoute');

require('dotenv-safe').config();
require('./database/mongoConfig').connect();

const app = express();

//db.connect();

app.use(cors());
app.use(express.json());

app.use('/akanices/users', userRoute);

module.exports = app;
const express = require('express');
const cors = require('cors');
const db = require('./database/mongoConfig');

require('dotenv-safe').config();

const app = express();

app.use(cors());
app.use(express.json());

db.connect();

module.exports = app;
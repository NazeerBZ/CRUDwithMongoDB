const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/routes');
const app = express();
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/crudDB");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
route(app);


module.exports = app
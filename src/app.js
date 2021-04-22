const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// Settings
app.set('port', process.env.PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(routes);

module.exports = app;
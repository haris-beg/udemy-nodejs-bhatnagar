'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Log an error if the DB connection fails
Mongoose.connection.on('error', error => {
    console.log("MongoDB Error: ", error);
});

module.exports = {
    Mongoose
}
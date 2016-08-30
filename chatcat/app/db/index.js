'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Log an error if the DB connection fails
Mongoose.connection.on('error', error => {
    console.log("MongoDB Error: ", error);
});

// Create a Schema that defines the structure for storing user data
const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String
}); 

// Turn the schema into a usable Model
let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
    Mongoose,
    userModel
}
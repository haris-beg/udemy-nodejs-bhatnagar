'use strict';
const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {

    let authProcessor = (accessToken, refreshToken, profile, done) => {
        // Find a user in the local db using profile.id
        // If the user is found, return the user data using the done()
        // If the user is not found in local db, create one in the local db and return it with done()
    }

    passport.use(new FacebookStrategy(config.fb, authProcessor));
}
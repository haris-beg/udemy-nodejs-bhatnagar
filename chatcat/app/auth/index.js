'use strict';
const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        // Find the user using the _id
        h.findById(id)
            .then(user => done(null, user))
            .catch(error => console.log('Error during deserializing the user'));
    });

    let authProcessor = (accessToken, refreshToken, profile, done) => {
        // Find a user in the local db using profile.id
        // If the user is found, return the user data using the done()
        // If the user is not found in local db, create one in the local db and return it with done()
        h.findOne(profile.id)
            .then(result => {
                if(result) {
                    done(null, result);
                } else {
                    // Create a new user and return
                    h.createNewUser(profile)
                        .then(newChatUser => done(null, newChatUser))
                        .catch(error => console.log('Error when creating new user'))
                }
            });
    }

    passport.use(new FacebookStrategy(config.fb, authProcessor));
}
'use strict';

const router = require('express').Router();

// creating a route handler for the root route
router.get('/', (req, res, next) => {
	res.render('login', {
        pageTitle: 'My Login Page'
    });
});

module.exports = {
    router: router
}

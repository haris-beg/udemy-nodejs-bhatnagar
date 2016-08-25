'use strict';

if (process.env.NODE_ENV === 'production') {
    // Offer production stage environment variables
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI
    }
}
else {
    // Offer development/testing stage settings and data configuration
    module.exports = require('./development.json'); 
}
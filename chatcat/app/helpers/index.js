'use strict';
const router = require('express').Router();

// Iterate through the routes object and mount the routes
let _registerRoutes = (routes, method) => {
    for(let key in routes) {
        if(typeof routes[key] === 'object' && routes[key] != null && !(routes[key] instanceof Array)) {
            _registerRoutes(routes[key], key);
        }
        else {
            // register the routes
            if(method === 'get') {
                router.get(key, routes[key]);
            }
            else if (method === 'post') {
                router.post(key, routes[key]);
            }
            else {
                router.use(routes[key]);
            }
        }
    }
}

let route = routes => {
    _registerRoutes(routes);
    return router;
}

// expose the routes method to the outside world
module.exports = {
    //route: route
    route //ES6 shorthand for the same as the last commented line
}
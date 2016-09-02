// this will load the appropriate json file
// dependning upon the environment
module.exports = require('./' + (process.env.NODE_ENV || 'development') + '.json');

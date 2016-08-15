'use strict';

module.exports = function() {
	return {
		hello: (user) => {
			return "Hello " + user;
		},
		goodmorning: (user) => {
			return "Good Morning " + user;
		}
	}
}


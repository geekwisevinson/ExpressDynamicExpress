const fs = require('fs');
const middlewares = fs.readdirSync('./custom_middleware', 'utf-8');
const middleware = {};

middlewares.forEach(middle => {
	console.log('middle',middle);
	var testing = fs.readdirSync('./custom_middleware', 'utf-8');
	console.log('testing',testing);
	middleware[middle.slice(0,-3)] =  require('./custom_middleware/' + `${middle.slice(0, -3)}`) ;
});

module.exports = middleware;
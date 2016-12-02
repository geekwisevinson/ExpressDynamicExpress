const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.get('/users', middleware.test, function(req, res) {
		res.send('get users test');
		console.log('got users');
	});
};
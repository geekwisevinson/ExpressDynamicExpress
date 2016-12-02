const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/users/authenticate/', middleware.get_token, function(req, res) {
		console.log('success');
	});
};
const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/users/new/:access_token', function(req, res) {
		Model_Save_New(User,req.body,req,res);
	});
};
const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/new/:access_token', middleware.test, function(req, res) {
		Model_Save_New(Email,req.body,req,res);
	});
};
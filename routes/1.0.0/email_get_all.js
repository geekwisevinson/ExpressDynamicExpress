const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/all/:access_token', middleware.test, function(req, res) {
		Model_Get_All(Email,req,res);
	});
};
const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/some/:access_token', middleware.test, function(req, res) {
		Model_Get_Some(Email,req.body,req,res);
	});
};
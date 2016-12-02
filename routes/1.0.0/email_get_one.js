const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/one/:access_token', middleware.test, function(req, res) {
		Model_Get_One(Email,req.body,req,res);
	});
};
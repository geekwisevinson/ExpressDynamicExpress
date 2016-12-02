const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/update/:access_token', middleware.test, function(req, res) {
		Model_Update_One(Email,req.body,req,res);
	});
};
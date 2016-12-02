const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/delete/:access_token', middleware.test, function(req, res) {
		Model_Delete_One(Email,req.body,req,res);
	});
};
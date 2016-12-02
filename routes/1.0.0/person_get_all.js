const middleware = require('./../../custom_middleware_setup');
module.exports =()=>{
	app.post('/persons/get',middleware.add_ext, function(req,res) {
		Model_Get_One(Person,req.body,req,res);
	})
};
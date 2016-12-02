const middleware = require('./../../custom_middleware_setup');
module.exports =()=>{
	app.post('/persons/new',function(req,res) {
		Model_Save_New(Person, req.body,req,res);
	})
}
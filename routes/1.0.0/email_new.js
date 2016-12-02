const middleware = require('./../../custom_middleware_setup');
module.exports=()=> {
	app.post('/emails/new', function(req, res) {

		console.log(req.body);

		mailgun.messages().send(req.body, function (error, body) {
			res.json({message:body,err:error});

			if(error){
				console.log('err',error)
			}
			if(body)
				console.log('body',body)
		});


		// Model_Save_New(Email,req.body,req,res);

	});
};
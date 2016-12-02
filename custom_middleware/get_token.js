module.exports=function(req, res, next) {

		User.findOne({
			name: req.body.name
		}, (err, user) => {
			var token = jwt.sign(user, "secret");
			res.json({token,success:true});
			next();
		});
};
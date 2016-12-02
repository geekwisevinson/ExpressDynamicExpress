module.exports=function(req, res, next) {

	req.body.name = req.body.name +'.js';
	next();
};
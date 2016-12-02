module.exports=()=> {
	app.get('/users',function (req, res) {
		res.send('get users');
	});
};
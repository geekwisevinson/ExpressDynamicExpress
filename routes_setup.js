const fs = require('fs');
const v = '1.0.0';
const routes = fs.readdirSync('./routes/'+v, 'utf-8');
const router = {};
router.run = [];

routes.forEach(route => {
	console.log(route);
	router.run.push( require('./routes/'+v+ '/' + `${route.slice(0, -3)}`) );
});

module.exports = router;
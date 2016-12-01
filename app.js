const env = process.env;
console.log(env.DB_URL);

const requires = require('./requires');
requires();

const db_setup = require('./db_setup');
db_setup();

const model_setup = require('./models_setup');
model_setup();

const middleware_setup = require('./middleware_setup');
middleware_setup();

const routes_setup = require('./routes_setup');
routes_setup.run.forEach(set =>{
	set();
});

app.listen(env.PORT, function () {
	console.log('Example app listening on port '+env.PORT+'!')
});

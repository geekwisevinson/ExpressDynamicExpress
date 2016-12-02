module.exports =  () =>{
		express = require('express');
		app = express();
		bodyParser = require('body-parser');
		cookieParser = require('cookie-parser');
		mongoose = require('mongoose');
		Promise = require('bluebird');
		mailgun = require('mailgun-js')({apiKey: env.MAILGUN_API_KEY,domain:env.MAILGUN_DOMAIN});
		logger = require('morgan');
		jwt = require('jsonwebtoken');

};
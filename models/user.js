const mongoose = require('mongoose');

const Schema = mongoose.Schema;

UserSchema = new Schema({
	name:{type:String},
	password:{type:String},
});

User = mongoose.model('User', UserSchema);

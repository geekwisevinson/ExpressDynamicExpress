const mongoose = require('mongoose');

const Schema = mongoose.Schema;

PersonSchema = new Schema({
	name:{type:String},
	password:{type:String},
});

Person = mongoose.model('Person', PersonSchema);

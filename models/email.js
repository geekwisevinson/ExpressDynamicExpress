	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	EmailSchema = new Schema({
		to: { type: String },
		from: { type: String },
		bcc: [String],
		subject: { type: String},
		message_body: { type: String },
		created_at: { type: Date, default: Date.now },
		email:{type:String},
		password:{type:String},
	});

	Email = mongoose.model('Email', EmailSchema);

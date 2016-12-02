	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	EmailSchema = new Schema({
	to: { type: String, required: true },
	from: { type: String, required: true },
	bcc: [String],
	subject: { type: String, required: true, default: '' },
	message_body: { type: String, required: true, default: '' },
	created_at: { type: Date, default: Date.now },
});

mongoose.model('Email', EmailSchema);
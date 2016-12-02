module.exports =  () =>{
	mongoose.connect(env.DB_URL);
	mongoose.Promise = Promise;
	const db = mongoose.connection;
	db.on('open', () => console.log('Database connected'));
	db.on('error', (err) => console.log(`DB ERROR: ${err}`));
};
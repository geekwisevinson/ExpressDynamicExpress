module.exports =  () =>{
	mongoose.connect('mongodb://branchadmin:badmin@ds135797.mlab.com:35797/branchesdb');
	mongoose.Promise = Promise;
	const db = mongoose.connection;
	db.on('open', () => console.log('Database connected'));
	db.on('error', (err) => console.log(`DB ERROR: ${err}`));
};
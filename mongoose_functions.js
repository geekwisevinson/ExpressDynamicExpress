module.exports = ()=>{

	Model_Save_New = (Mongoose_Model,data_to_save,req,res)=>{
		let mongoose_model = new Mongoose_Model(data_to_save);
		mongoose_model.save(function(err,saved_data) {
			if(err) console.log(err);
			console.log(saved_data);
			res.json(saved_data)
		});
	};

	Model_Get_All = (Mongoose_Model,req,res)=>{
		Mongoose_Model.find({}, function(err, array_of_objects) {
			if (err) console.log(err);
			if(array_of_objects)
				res.json(array_of_objects);
			if(!array_of_objects)
				res.json([]);
		});
	};

	Model_Get_Some = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.find(query_object, function(err, array_of_objects) {
			if (err) console.log(err);
			if(array_of_objects)
				res.json(array_of_objects);
			if(!array_of_objects)
				res.json([]);
		});
	};

	Model_Get_One = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.findOne(query_object, function(err, object) {
			if (err) console.log(err);
			if(object){
				object.remove(function(err) {
					if (err) {console.log(err);}
					console.log('User successfully deleted!');
					res.json(query_object);
				});
			}

			if(!object)
				res.json({});
		});
	};

	Model_Delete_One = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.findOne(query_object, function(err, object) {
			if (err) console.log(err);
			if(object)
				res.json(object);
			if(!object)
				res.json({});
		});
	};

	Model_Update_One = (Mongoose_Model,query_object,req,res)=>{

		const changedData = Object.assign({}, req.body);
		delete changedData._id;
		Mongoose_Model.findOneAndUpdate({_id:req.body._id}, changedData, function(err, object) {
			if (err) console.log(err);
			if(object)
				res.json(object);
			if(!object)
				res.json({});
		});
	};

};
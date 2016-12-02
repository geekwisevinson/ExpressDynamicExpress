module.exports = ()=>{

	Model_Save_New = (Mongoose_Model,data_to_save,req,res)=>{
		let mongoose_model = new Mongoose_Model(data_to_save);
		mongoose_model.save(function(err,saved_data) {
			if(err){
				res.json({message:err,success:false});
			}
			if(saved_data)
			res.json({data:saved_data,success:true});
		});
	};

	Model_Get_All = (Mongoose_Model,req,res)=>{
		Mongoose_Model.find({}, function(err, array_of_objects) {
			if (err)
				res.json({message:err,success:false});
			if(array_of_objects)
				res.json({data:array_of_objects,success:true});
		});
	};

	Model_Get_Some = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.find(query_object, function(err, array_of_objects) {
			if (err)
				res.json({message:err,success:false});
			if(array_of_objects)
				res.json({data:array_of_objects,success:true});
		});
	};

	Model_Get_One = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.findOne(query_object, function(err, object) {
			if (err) console.log(err);
			if(object){
				object.remove(function(err) {
					if (err)
						res.json({message:err,success:false});

						res.json({data:query_object,success:true});
				});
			}
		});
	};

	Model_Delete_One = (Mongoose_Model,query_object,req,res)=>{
		Mongoose_Model.findOne(query_object, function(err, object) {
			if (err)
				res.json({message:err,success:false});
			if(object)
				res.json({data:object,success:true});
		});
	};

	Model_Update_One = (Mongoose_Model,query_object,req,res)=>{

		const changedData = Object.assign({}, req.body);
		delete changedData._id;
		Mongoose_Model.findOneAndUpdate({_id:req.body._id}, changedData, function(err, object) {
			if (err)
				res.json({message:err,success:false});
			if(object)
				res.json({data:object,success:true});
		});
	};

};
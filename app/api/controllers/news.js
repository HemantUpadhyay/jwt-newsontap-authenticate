const newsModel = require('../models/news');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		newsModel.findById(req.params.newsId, function(err, newsInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "news found!!!", data:{newss: newsInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let newssList = [];

		newsModel.find({}, function(err, newss){
			if (err){
				next(err);
			} else{
				for (let news of newss) {
					newssList.push({id: news._id, name: news.name, released_on: news.released_on});
				}
				res.json({status:"success", message: "newss list found!!!", data:{newss: newssList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		newsModel.findByIdAndUpdate(req.params.newsId,{name:req.body.name}, function(err, newsInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "news updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		newsModel.findByIdAndRemove(req.params.newsId, function(err, newsInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "news deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		newsModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "news added successfully!!!", data: null});
				  
				});
	},

}
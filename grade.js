var MongoClient = require('mongoDB').MongoClient;
MongoClient.connect('mongodb://localhost:27017/weather',function(err,d){
		if(err) throw err;
		var query = { };
		db.collection('data').findOne(query, function(err,doc){
		if(err) throw err;
		console.dir(doc);
		db.close();
		}
		)
		}		);

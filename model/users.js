var connect = require('../config/connections');
var config = {dbName : "tss"};
var mongodb = require('mongodb');
module.exports.select=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('users').find().toArray(cb);
	});
}
module.exports.decAge=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('users').find({ age : {$gt : 25 }}).sort({ age : -1}).toArray(cb);
	});
}
module.exports.selectWhereUsername=function(username, cb){
	connect.mongodb(function(err, client){
		// console.log('*****', username);
		var db = client.db(config.dbName);
		db.collection('users').findOne(username, cb);
	});
}
module.exports.findById=function(id, cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('users').find({ _id : new ObjectId(id) }).toArray(cb);
	});
}

module.exports.selectWhere=function(obj, cb){ // { username : 'demo@gmail.com'}
			// { username : 'demo@gmail.com', password : '123' }
			
		connect.mongodb(function(err, client){
			if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			db.collection('users').find(obj).toArray(cb);
		});
}
module.exports.insert=function(obj, cb){
	connect.mongodb(function(err, client){
		if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			db.collection('users').insert(obj, cb);

		});
}
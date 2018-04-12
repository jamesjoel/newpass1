var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
module.exports.mongodb=function(cb){
	MongoClient.connect(url, cb);
}
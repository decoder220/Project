var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fb_development");
    dbo.collection("user_data").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[0].destination_port);
      db.close();
    });
  });
  

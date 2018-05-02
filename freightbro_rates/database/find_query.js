var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
var dbo=db.db("mydb");
 dbo.collection("freightbro").find({},function(err,result){
      if(err) throw err;
     console.log(result);
     db.close();
  }
);


});

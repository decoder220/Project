var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fb_development");
  var myobj = {
    "pickup_location":"PUNE",
    "origin_port":"MUMBAI",
    "origin_port_code":"INNSA",
    "Destination_port":"Abu Dhabi",
    "Destination_port_code":"SAJBI",
    "Destination_door":"",
    "pickup_pin":"400019",
    "origin_pin":"400703",
    "destination_port_pin":"400019",
    "destination_door_pin":"400703",
    "Container_size":"20"
  
  };


  dbo.collection("user_data").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    console.log("database closed");
  });
});
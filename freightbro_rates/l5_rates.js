var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var destination_door1,destination_port1,destination_door_pin1,destination_port_pin1;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fb_development");
    dbo.collection("user_data").find({}).toArray(function(err, result) {
      if (err) throw err;
      destination_door1=result[0].Destination_door;
      destination_port1=result[0].destination_port;
      destination_port_pin1=result[0].destination_port_pin;
      destination_door_pin1=result[0].destination_door_pin;


     dbo.collection("FREIGHTBRO").find({"$and":[{"$or":[{destination_port_city:""},
     {destination_port_city:destination_port_pin1},{destination_port_city:destination_port1}]},
     {"$or":[{destination_door_city:""},{destination_door_city:destination_door1},
     {destination_door_city:destination_door_pin1}]},
     {leg_code:"fcl_l5"}]}).toArray(function(err,result){
         if(err) throw err;
        console.log(result); 
     })
      db.close();
    });
  });

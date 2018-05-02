




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

var pickup_location1,destination_port_code1,city,pickup_pin1,origin_pin1,
  destination_port1,destination_door1,destination_port_pin1,destination_door_pin1;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fb_development");
  dbo.collection("user_data").find({}).toArray(function(err, result) {
    if (err) throw err;
    origin_port1=result[0].origin_port;
    pickup_location1=result[0].pickup_location;
    pickup_pin1=result[0].pickup_pin;
    origin_pin1=result[0].origin_pin;
    origin_port_code1=result[0].origin_port_code;
    // console.log(pickup_location1); console.log(origin_port1);
    dbo.collection("FREIGHTBRO").find({"$and":[{"$or":[{origin_door_city:pickup_location1},
    {origin_door_city:""},{origin_door_city:pickup_pin1}]},
    {"$or":[{origin_port_city:origin_port1},{origin_port_city:""},
    {origin_port_city:origin_pin1}]},{leg_code:"fcl_l1"}]}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
    })
   
    db.close();
  });
});
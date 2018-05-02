var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(url, function(err, db) {
    var origin_port_code1,load,destination_port_code1;;
  if (err) throw err;
  var dbo = db.db("fb_development");
  dbo.collection("user_data").find({}).toArray(function(err, result) {
         if(err) throw err;
         origin_port_code1=result[0].origin_port_code;
        destination_port_code1=result[0].Destination_port_code; 
         
         dbo.collection("FREIGHTBRO").find({leg_code: 'fcl_l2',origin_port_code:origin_port_code1}).toArray(function(err, result) {
         console.log(result[0].rates); console.log("\n\n");
          if(err) throw err;
      db.close();
      });
     
      dbo.collection("FREIGHTBRO").find({leg_code: 'fcl_l3',origin_port_code:origin_port_code1,destination_port_code:destination_port_code1}).toArray(function(err, result) {
        console.log(result); console.log("\n\n");
      if(err) throw err;
  db.close();
  });

  dbo.collection("FREIGHTBRO").find({leg_code: 'fcl_l4',destination_port_code:destination_port_code1}).toArray(function(err, result) {
    console.log(result);
  if(err) throw err;
db.close();
}); 
  
         db.close();
  });
 
  
});
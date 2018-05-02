var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var org_port,dest_port;
MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
var dbo=db.db("fb_development");
 dbo.collection("user_data").find({}).toArray(function(err,result){
      if(err) throw err;
       org_port=result[0].origin_port;   //org_port stores the name or pin of the origin port entered by the user or from the user database.
       dest_port=result[0].Destination_port;  // dest_port is the name or pin of the destination port from the user database
    dbo.collection("FREIGHTBRO").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result[0]);
        var temp1;
        for(var i=0;i<result.length;i++){
             if(reult[i].origin_door_city==org_port);
              temp1.push(result[i]);

        }
   
    }
) ;
   db.close();  
  }
);
 
});

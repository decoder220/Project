
function CodeToCity(y){   
    var x=y;
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://root:root@cluster0-shard-00-00-5hl9j.mongodb.net:27017,cluster0-shard-00-01-5hl9j.mongodb.net:27017,cluster0-shard-00-02-5hl9j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
;

MongoClient.connect(uri, function(err, db) { 
    var port_code;
  if (err) throw err;
  var dbo = db.db("track");
  dbo.collection("ports").find({}).toArray(function(err, result) {
    if (err) throw err;
     for(var i=0;i<result.length;i++){
         if(result[i].city==x){ 
          port_code=result[i].global_port_code; 
          break;  
         }
     }
   
     return(port_code);
    db.close();
  });
});
 }
 console.log(CodeToCity("Mumbai"));

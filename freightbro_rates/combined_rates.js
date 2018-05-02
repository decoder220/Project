var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

var destination_door1,destination_port1,destination_door_pin1,destination_port_pin1,pickup_pin1,origin_port1,
       pickup_location1,origin_pin1,origin_port_code1 ;
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

    destination_door1=result[0].Destination_door;
    
    destination_port1=result[0].destination_port;
    
    destination_port_pin1=result[0].destination_port_pin;
    
    destination_door_pin1=result[0].destination_door_pin;
    
    destination_port_code1=result[0].Destination_port_code;
    // console.log(pickup_location1); console.log(origin_port1);
    dbo.collection("FREIGHTBRO").find({"$or":[{"$and":[{"$or":[{origin_door_city:pickup_location1},
   
      {origin_door_city:""},{origin_door_city:pickup_pin1}]},

      {"$or":[{origin_port_city:origin_port1},{origin_port_city:""},
    
      {origin_port_city:origin_pin1}]},{leg_code:"fcl_l1"}]},{"$and":[{"$or":[{destination_port_city:""},
    
      {destination_port_city:destination_port_pin1},{destination_port_city:destination_port1}]},
    
      {"$or":[{destination_door_city:""},{destination_door_city:destination_door1},
    
      {destination_door_city:destination_door_pin1}]},
    
      {leg_code:"fcl_l5"},{leg_code:"fcl_l5"}]},{"$and":[{leg_code:"fcl_l3"},
    
      {origin_port_code:origin_port_code1},{destination_port_code:destination_port_code1
    
      }]},{"$and":[{leg_code:"fcl_l2"},{origin_port_code:origin_port_code1}]},{"$and":[{leg_code:"fcl_l4"},
      
      {destination_port_code:destination_port_code1}]},]}).toArray(function(err,result){
        if(err) throw err;
        var l1=new Array(),l2=new Array(),l3=new Array(),l4=new Array(),l5=new Array();
        for(var i=0;i<result.length;i++){
            if(result[i].leg_code.length==1){
              if(result[i].leg_code[0]=="fcl_l1")
              l1.push(result[i].rates);
              
              if(result[i].leg_code[0]=="fcl_l2")
              l2.push(result[i].rates);
              
              if(result[i].leg_code[0]=="fcl_l3")
              l3.push(result[i].rates);

              if(result[i].leg_code[0]=="fcl_l4")
              l4.push(result[i].rates);

              if(result[i].leg_code[0]=="fcl_l5")
              l5.push(result[i].rates);

            }
        }
        for(var i=0;i<result.length;i++){
          if(result[i].leg_code.length>1){
            for(var j=0;j<result[i].leg_code.length;j++){
               if(result[i].leg_code[j]=="fcl_l1")
               l1.push(result[i].rates);
               if(result[i].leg_code[j]=="fcl_l2")
               l2.push(result[i].rates);
               if(result[i].leg_code[j]=="fcl_l3")
               l3.push(result[i].rates);
               if(result[i].leg_code[j]=="fcl_l4")
               l4.push(result[i].rates);
               if(result[i].leg_code[j]=="fcl_l5")
               l5.push(result[i].rates);
            }
          }
        }
         
         for(var i=0;i<l1.length;i++){
           for(var j=0;j<l2.length;j++){
             for(var k=0;k<l3.length;k++){
               for(var l=0;l<l4.length;l++){
                 for(var m=0;m<l5.length;m++){
                   console.log(l1[i]); console.log('\n');
                   console.log(l2[j]);console.log('\n');
                   console.log(l3[k]);console.log('\n');
                   console.log(l4[l]);console.log('\n');
                   console.log(l5[m]);console.log('\n');
                   console.log('\n\n');
                 }
               }
             }
           }
         }
        


        db.close();
    })
   
    db.close();
  });
});
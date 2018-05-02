var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fb_development");
  var myobj = [
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l2"
      ],
      "origin_port_code": "INNSA",
      "cfs_stuffing": "0",
      "impo_expo": "impoter",
      "vendor_id": "1a5590ff3fcc3506a4990001",
      "sub_vendor_id": "2a5590ff3fcc3506a4990002",
      "start_date": 2015,
      "expiry_date": 2017,
      "service": "E2",
      "batchcode": "m6z1MovPq0ZLRrE1Xw8TEete4T5UhOt2NYWl9z5z",
      "uploaded_by": "6a5590ff3fcc3506a49976b8",
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "20001",
          "charge_description": "OTHC Charge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "Pick",
          "per_unit_rate": 5
        },
        {
          "charge_id": "20002",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:38:28",
      "created_at": "2018-04-10 03:38:28",
      "_id": "5acc31b43fcc354b68005d19"
    }
  ];
  dbo.collection("FREIGHTBRO").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    console.log("database closed");
  });
});
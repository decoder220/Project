var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fb_development");
  var myobj = [
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1",
        "fcl_l2_cha"
      ],
      "origin_door_city": "PUNE",
      "origin_port_city": "INNSA",
      "vendor_id": "1a5590ff3fcc3506a4990001",
      "sub_vendor_id": "2a5590ff3fcc3506a4990002",
      "start_date": 2015,
      "expiry_date": 2017,
      "service": "E2",
      "transit_time": "2 days",
      "batchcode": "m6z1MovPq0ZLRrE1Xw8TEete4T5UhOt2NYWl9z5z",
      "uploaded_by": "6a5590ff3fcc3506a49976b8",
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_km",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_kg",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "25001",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:35:38",
      "created_at": "2018-04-10 03:35:38",
      "_id": "5acc310a3fcc354b68005d07"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1",
        "fcl_l2_cha"
      ],
      "origin_door_city": "400019",
      "origin_port_city": "INNSA",
      "vendor_id": "1a5590ff3fcc3506a4990001",
      "sub_vendor_id": "2a5590ff3fcc3506a4990002",
      "start_date": 2015,
      "expiry_date": 2017,
      "service": "E2",
      "transit_time": "2 days",
      "batchcode": "m6z1MovPq0ZLRrE1Xw8TEete4T5UhOt2NYWl9z5z",
      "uploaded_by": "6a5590ff3fcc3506a49976b8",
      "max_capacity": "3 MT",
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_km",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_kg",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "25001",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:35:38",
      "created_at": "2018-04-10 03:35:38",
      "_id": "5acc310a3fcc354b68005d08"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1",
        "fcl_l2_cha"
      ],
      "origin_door_city": "",
      "origin_port_city": "INNSA",
      "vendor_id": "1a5590ff3fcc3506a4990001",
      "sub_vendor_id": "2a5590ff3fcc3506a4990002",
      "start_date": 2015,
      "expiry_date": 2017,
      "service": "E2",
      "transit_time": "2 days",
      "batchcode": "m6z1MovPq0ZLRrE1Xw8TEete4T5UhOt2NYWl9z5z",
      "uploaded_by": "6a5590ff3fcc3506a49976b8",
      "max_capacity": "3 MT",
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_km",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 1500,
          "charge_basis": "per_kg",
          "slab": {
            "0-44": 10,
            "45-99": 9,
            "100-249": 8,
            "250-299": 7,
            "300-499": 6,
            "500-999": 5,
            "1000+": 4
          }
        },
        {
          "charge_id": "10002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "25001",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:35:38",
      "created_at": "2018-04-10 03:35:38",
      "_id": "5acc310a3fcc354b68005d09"
    }
  ];
  dbo.collection("FREIGHTBRO").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    console.log("database closed");
  });
});
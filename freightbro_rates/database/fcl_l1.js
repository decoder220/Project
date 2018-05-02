var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fb_development");
  var myobj = [
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
      ],
      "origin_door_city": "PUNE",
      "origin_port_city": "MUMBAI",
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d11"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d12"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
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
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d13"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
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
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "10001",
          "charge_description": "Pick Up Charge",
          "slab_charge": true,
          "charge_currency": "INR",
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d14"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
      ],
      "origin_door_city": "PUNE",
      "origin_port_city": "",
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d15"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
      ],
      "origin_door_city": "",
      "origin_port_city": "",
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d16"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
      ],
      "origin_door_city": "400019",
      "origin_port_city": "400703",
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d17"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l1"
      ],
      "origin_door_city": "400019",
      "origin_port_city": "",
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
          "charge_min": 15000,
          "charge_basis": "per_equipment",
          "slab_basis": "per_km",
          "slab": {
            "0-10": 15000,
            "11-20": 20000,
            "21-30": 21000,
            "31-40": 22000,
            "41-50": 23000,
            "51-60": 24000,
            "61-70": 25000,
            "71-80": 26000,
            "81-90": 27000,
            "91-100": 28000,
            "100+": 29000
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
          "charge_id": "10003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:37:34",
      "created_at": "2018-04-10 03:37:34",
      "_id": "5acc317e3fcc354b68005d18"
    }
  ]
  dbo.collection("FREIGHTBRO").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    console.log("database closed");
  });
});
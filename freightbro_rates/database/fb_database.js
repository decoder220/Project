var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://aman:12345@cluster0-shard-00-00-zcgkh.mongodb.net:27017,cluster0-shard-00-01-zcgkh.mongodb.net:27017,cluster0-shard-00-02-zcgkh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Rate");
  var myobj =
    
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l1",
          "fcl_l2"
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
            "charge_id": "20001",
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
        "_id": "5acc310a3fcc354b68005cfd"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l1",
          "fcl_l2"
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
            "charge_id": "20001",
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
        "_id": "5acc310a3fcc354b68005cfe"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l1",
          "fcl_l2"
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
            "charge_id": "20001",
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
        "_id": "5acc310a3fcc354b68005cff"
      }
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l1",
          "fcl_l2",
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
            "charge_id": "10002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of pickup_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "20001",
            "charge_description": "OTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
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
        "_id": "5acc310a3fcc354b68005d03"
      },
      {
        "mode": "air",
        "leg_code": [
          "air_l1",
          "air_l2",
          "air_l2_cha"
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
            "charge_id": "10002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of pickup_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "20001",
            "charge_description": "OTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
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
        "_id": "5acc310a3fcc354b68005d04"
      },
      {
        "mode": "air",
        "leg_code": [
          "air_l1",
          "air_l2",
          "air_l2_cha"
        ],
        "origin_door_city": "",
        "origin_port_city": "BOM",
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
            "charge_id": "10002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of pickup_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "20001",
            "charge_description": "OTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
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
        "_id": "5acc310a3fcc354b68005d05"
      }
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l2",
          "fcl_l2_cha"
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
            "charge_description": "Agency Charge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "per_equipment",
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
        "_id": "5acc310a3fcc354b68005d06"
      }
    ],
    [
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
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "SOME CITY",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
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
        "_id": "5acc310a3fcc354b68005d00"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
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
        "_id": "5acc310a3fcc354b68005d01"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "",
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
            "charge_id": "50001",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
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
        "_id": "5acc310a3fcc354b68005d02"
      }
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "SOME CITY",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
            "charge_description": "DTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0a"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
            "charge_description": "DTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0b"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "1100019",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "40001",
            "charge_description": "DTHC",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 200,
            "charge_basis": "per BL",
            "per_unit_rate": 50
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0c"
      }
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l4",
          "fcl_l4_cha"
        ],
        "destination_port_code": "SAJBI",
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
        "rates": [
          {
            "charge_id": "40001",
            "charge_description": "Agency Charge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "chargeable",
            "per_unit_rate": 5
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0d"
      }
    ],
    [
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "SOME CITY",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0e"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d0f"
      },
      {
        "mode": "fcl",
        "leg_code": [
          "fcl_l5",
          "fcl_l4_cha"
        ],
        "destination_port_city": "SAJBI",
        "destination_door_city": "1100019",
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
            "charge_id": "50001",
            "charge_description": "Delivery Charge",
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
            "charge_id": "50002",
            "charge_description": "Fuel Surcharge",
            "slab_charge": false,
            "charge_currency": "INR",
            "charge_min": 500,
            "charge_basis": "% of delivery_charge",
            "per_unit_rate": 5
          },
          {
            "charge_id": "45001",
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
        "_id": "5acc310a3fcc354b68005d10"
      }
    
  ;
  dbo.collection("FCL-COMBINED").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
 myobj =
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
  ;
  dbo.collection("FCL-L1").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
  myobj = 
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
  ;
  dbo.collection("FCL-L2").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
  myobj =
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l3"
      ],
      "origin_port_code": "INNSA",
      "destination_port_code": "SAJBI",
      "cfs_stuffing": "0",
      "impo_expo": "impoter",
      "vendor_id": "1a5590ff3fcc3506a4990001",
      "sub_vendor_id": "2a5590ff3fcc3506a4990002",
      "start_date": 2015,
      "expiry_date": 2017,
      "via_route": "",
      "service": "S2",
      "transit_time": "1 Day",
      "batchcode": "m6z1MovPq0ZLRrE1Xw8TEete4T5UhOt2NYWl9z5z",
      "uploaded_by": "6a5590ff3fcc3506a49976b8",
      "remarks": "R1, R2",
      "inclusions": "In1, In2",
      "other_charges": "oc1,oc2",
      "if_applicable_charges": "IAC1,IAC1",
      "load_code": "20GP",
      "rates": [
        {
          "charge_id": "30001",
          "charge_description": "Main Freight",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "per_equipment",
          "per_unit_rate": 5
        },
        {
          "charge_id": "30002",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:39:04",
      "created_at": "2018-04-10 03:39:04",
      "_id": "5acc31d83fcc354b68005d1a"
    }
  ;
  dbo.collection("FCL-L3").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });

  myobj=
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l4"
      ],
      "destination_port_code": "SAJBI",
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
          "charge_id": "40001",
          "charge_description": "OTHC Charge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "Pick",
          "per_unit_rate": 5
        },
        {
          "charge_id": "40002",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:39:57",
      "created_at": "2018-04-10 03:39:57",
      "_id": "5acc320d3fcc354b68005d1c"
    };
  dbo.collection("FCL-L4").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
  myobj=
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "SOME CITY",
      "destination_door_city": "SOME CITY",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of delivery_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d1d"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "SAJBI",
      "destination_door_city": "SOME CITY",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d1e"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "SAJBI",
      "destination_door_city": "",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d1f"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "SAJBI",
      "destination_door_city": "",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d20"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "SOME CITY",
      "destination_door_city": "",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d21"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "",
      "destination_door_city": "",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d22"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "400019",
      "destination_door_city": "400703",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d23"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "400019",
      "destination_door_city": "",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d24"
    },
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l5"
      ],
      "destination_port_city": "DXB",
      "destination_door_city": "400019",
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
          "charge_id": "50001",
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
          "charge_id": "50002",
          "charge_description": "Fuel Surcharge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "% of pickup_charge",
          "per_unit_rate": 5
        },
        {
          "charge_id": "50003",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:41:03",
      "created_at": "2018-04-10 03:41:03",
      "_id": "5acc324f3fcc354b68005d25"
    }
  ;
  dbo.collection("FCL-L5").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });

  myobj=
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l2_cha"
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
          "charge_id": "25001",
          "charge_description": "OTHC Charge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "Pick",
          "per_unit_rate": 5
        },
        {
          "charge_id": "25002",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:42:45",
      "created_at": "2018-04-10 03:42:45",
      "_id": "5acc32b53fcc354b68005d26"
    }
  ;
  dbo.collection("FCL-L2-CHA").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
 myobj=
    {
      "mode": "fcl",
      "leg_code": [
        "fcl_l4_cha"
      ],
      "destination_port_code": "SAJBI",
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
          "charge_id": "45001",
          "charge_description": "OTHC Charge",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 500,
          "charge_basis": "Pick",
          "per_unit_rate": 5
        },
        {
          "charge_id": "45002",
          "charge_description": "Documentation Fee",
          "slab_charge": false,
          "charge_currency": "INR",
          "charge_min": 200,
          "charge_basis": "per BL",
          "per_unit_rate": 50
        }
      ],
      "updated_at": "2018-04-10 03:44:13",
      "created_at": "2018-04-10 03:44:13",
      "_id": "5acc330d3fcc354b68005d27"
    };
  dbo.collection("FCL-L2-CHA").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   // db.close();
    //console.log("database closed");
  });
db.close();
});
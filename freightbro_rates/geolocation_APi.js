import { resolve } from "dns";

var city;
function port(x) {
  const https = require("https");
  const url="https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" +x+"&key=AIzaSyDt0wA3l7sLb4amjCy_wOg9n10lQT8oTDI";
  if(x[0]>='0' && x[0]<='9'){
  https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
     var city= res.on("end", () => {
         // console.log(body)
        body = JSON.parse(body);
       // console.log(
         // `City: ${body} -`
        //);
        resolve( body.results[0].address_components[1].long_name); 
      });
    
    });
     return city;
  }
}

port("842001");
console.log("ashdja");
//console.log(city);

// console.log(port("800014"));

//async await

const https = require("https");
const url = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:400019&key=AIzaSyDt0wA3l7sLb4amjCy_wOg9n10lQT8oTDI'

https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
        console.log(body)
      body = JSON.parse(body);
      console.log(
        `City: ${body} -`
      );
    });
  });

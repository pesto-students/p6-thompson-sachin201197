const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function (req, res) {
  res.send("Get forecasted weather details of your city");
});

router.get("/cities", function (req, res) {
  var days = req.query.days;
  var city = req.query.city;
  request(
    `https://api.weatherapi.com/v1/forecast.json?key=a7bdf900197548ad8cd143616232601&q=${city}&days=${days}`,
    function (error, response, body) {
      var data = JSON.parse(body);
      if (city === "") {
        res.send(`enter the city name`);
      }
      if (response.statusCode == 200) {
        res.send(data.forecast.forecastday);
      } else {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.location); // Print
      }
    }
  );
});

module.exports = router;

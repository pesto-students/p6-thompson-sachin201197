const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");
const lData = require("./locationData.json");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function (req, res) {
  res.send("Get Weather deatils of your city");
});

router.get("/cities/:city", function (req, res) {
  var city = req.params.city;
  console.log(city);
  request(
    `https://api.weatherapi.com/v1/current.json?key=a7bdf900197548ad8cd143616232601&q=${city}`,
    function (error, response, body) {
      var data = JSON.parse(body);
      if (city === "") {
        res.send(`enter the city name`);
      }
      if (response.statusCode == 200) {
        res.send(
          `The Weather in your city ${city} is ${data.current.condition.text} and Temperature is ${data.current.temp_c}  C`
        );
      } else {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.location); // Print
      }
    }
  );
});

var cities = ["Bangalore", "France", "UAE", "USA"];
let multipleCityData = [];
function getMultiCity() {
  for (let i = 0; i < cities.length; i++) {
    request(
      `https://api.weatherapi.com/v1/current.json?key=a7bdf900197548ad8cd143616232601&q=${cities[i]}`,
      function (error, response, body) {
        var data = JSON.parse(body);
        if (response.statusCode == 200) {
          multipleCityData.push(data);
        } else {
          console.error("error:", error); // Print the error if one occurred
          console.log("statusCode:", response && response.location); // Print
        }
      }
    );
  }
}
getMultiCity();

router.get("/cities", function (req, res) {
  var page = req.query.page;
  if (!page) {
    res.send(multipleCityData);
  }
  var limit = 2;
  var startIndex = (page - 1) * limit;
  var endIndex = page * limit;
  var data = multipleCityData.slice(startIndex, endIndex);
  res.send(data);
});

module.exports = router;

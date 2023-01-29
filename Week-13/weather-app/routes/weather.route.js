const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", function (req, res) {
  res.send("hello World");
});

const cities = [
  { ID: 1, city: "Banglore", we: null },
  { ID: 2, city: "France" },
  { ID: 3, city: "Spain" },
  { ID: 4, city: "Barcelona" },
  { ID: 5, city: "japan" },
  { ID: 6, city: "uae" },
];
router.get("/cities", function (req, res) {
  const page = req.query.page;
  const limit = 3;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = cities.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);
  res.send(results);
});

function appendWeatherinCities() {}
function getWeather(citys) {
  console.log(citys);
  request(
    `https://api.weatherapi.com/v1/current.json?key=a7bdf900197548ad8cd143616232601&q=${citys}`,
    function (error, response, body) {
      var data = JSON.parse(body);
      if (response.statusCode == 200) {
        res.we = data.current.condition.text;
      } else {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.location); // Print
      }
    }
  );
}
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
          `The Weather in your city ${city} is ${data.current.condition.text}`
        );
      } else {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.location); // Print
      }
    }
  );
});
module.exports = router;

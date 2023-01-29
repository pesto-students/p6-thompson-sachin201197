const express = require("express");
const request = require("request");
const app = express();
const PORT = 8082;
const bodyParser = require("body-parser");
const weatherRouter = require("./routes/weather.route");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);

app.listen(PORT, () => {
  `App is running on the port ${PORT} successfully`;
});

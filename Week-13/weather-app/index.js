const express = require("express");
const request = require("request");
const app = express();
const PORT = 8082;

const weatherRouter = require("./routes/weather.route");
const Forecast = require("./routes/Forecast.route");

app.use("/v1/weather", weatherRouter);
app.use("/v1/forecast", Forecast);

app.listen(PORT, () => {
  `App is running on the port ${PORT} successfully`;
});

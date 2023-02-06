const express = require("express");
const app = express();
const connectDb = require("./Config/db");
const user = require("./Routes/user.route");

app.use(express.json());
connectDb();

app.use("/v1/wealth", user);
// app.get("/", async function (req, res) {
//   try {
//     var result = await user.find({});
//     console.log(result);
//     res.json(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.get("/:name", async function (req, res) {
//   try {
//     var result = await user.find({ name: req.params.name });
//     console.log(result);
//     res.json(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

// app.post("/", async function (req, res) {
//   const data = new user({
//     name: req.body.name,
//     email: req.body.email,
//   });
//   try {
//     var result = await data.save();
//     res.json(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

app.listen(8082, () => {
  "APP is running on Port 8082";
});

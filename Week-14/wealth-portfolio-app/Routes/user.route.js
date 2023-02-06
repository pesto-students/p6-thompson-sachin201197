const express = require("express");
const userRoute = express.Router();
const useController = require("../Controllers/user.controller");
// const bodyParser = require("body-parser");

// userRoute.use(express.json);

userRoute.get("/", useController.showUsers);
userRoute.post("/addUser", useController.addUser);
userRoute.post("/updateUser", useController.updateUser);
userRoute.post("/deleteUser", useController.deleteUser);

module.exports = userRoute;

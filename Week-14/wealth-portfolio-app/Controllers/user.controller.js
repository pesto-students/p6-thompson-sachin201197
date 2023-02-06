const user = require("../Models/user.model");
const showUsers = async (req, res, next) => {
  const result = await user.find({});
  res.json(result);
};

const addUser = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: "Please send the body" });
    return;
  }

  const userData = new user({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    email: req.body.email,
  });
  userData
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message || "Ures creation got failed" });
    });
};

const updateUser = (req, res) => {
  const v = req.body.FirstName;
  user
    .updateOne({ FirstName: v }, { $set: { LastName: "valyte__" } })
    .then((data) => {
      res.send(data);
    });
};

const deleteUser = (req, res, next) => {
  user.deleteOne({ name: "Sachi" });
};

module.exports = {
  showUsers,
  addUser,
  updateUser,
  deleteUser,
};

const mongoos = require("mongoose");

const Schema = mongoos.Schema;

const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoos.model("users", userSchema);

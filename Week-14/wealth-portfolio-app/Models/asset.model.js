const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema(
  {
    income: {
      type: Number,
    },
    expenses: {
      type: Number,
    },
  },
  { timestamps: true }
);

const asset = mongoose.model("Asset", assetSchema);

module.exports = asset;

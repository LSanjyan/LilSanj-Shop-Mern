const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
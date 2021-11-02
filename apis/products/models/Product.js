const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  // we are creating a layout "schema for the data"
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("product", ProductSchema);

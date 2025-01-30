const mongoose = require("mongoose");
const { Schema } = mongoose;

const productModel = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    categories: {
      type: [String],
      default: [],
    },
    sizes: [
      {
        size: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productModel);

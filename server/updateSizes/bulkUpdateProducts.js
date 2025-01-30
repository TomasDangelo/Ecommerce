require('dotenv').config({ path: "../.env" })
const mongoose = require("mongoose");
const Product = require("../models/productModel");
const fs = require("fs");


console.log("DB_URL:", process.env.DB_URL);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Conectado a MongoDB");

    const productsData = JSON.parse(fs.readFileSync("./productsData.json", "utf-8"));

    for (let product of productsData) {
      await Product.findByIdAndUpdate(product._id, { $set: { sizes: product.sizes } });
      console.log(`Producto ${product._id} actualizado.`);
    }

    console.log("Actualización masiva completada.");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error conectando a MongoDB:", err);
  });

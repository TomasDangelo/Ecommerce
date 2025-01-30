const mongoose = require("mongoose");
const Product = require("./models/productModel"); // Asegúrate de que la ruta sea correcta
const dotenv = require("dotenv")
dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Conectado a MongoDB");

    // Obtener todos los productos
    const products = await Product.find({});

    for (let product of products) {
      // Si el producto ya tiene un array de "sizes" bien estructurado, lo ignoramos
      if (Array.isArray(product.sizes) && product.sizes.length > 0 && product.sizes[0].size) {
        console.log(`El producto ${product.title} ya tiene sizes estructurados. Saltando...`);
        continue;
      }

      // Crear el array "sizes" basado en los valores actuales de "size" y "price"
      let newSizes = [];
      if (product.size && product.price) {
        newSizes.push({ size: product.size, price: product.price });
      }

      // Actualizar el producto con la nueva estructura
      await Product.findByIdAndUpdate(product._id, {
        $set: {
          sizes: newSizes
        },
        $unset: { size: "", price: "" } // Eliminar los campos antiguos
      });

      console.log(`Producto ${product.title} actualizado correctamente.`);
    }

    console.log("Actualización completada.");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error conectando a MongoDB:", err);
  });
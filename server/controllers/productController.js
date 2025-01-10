const Product = require("../models/productModel")

const createProduct = async (req, res) => {
    try {
    const newProduct = new Product ({
      ...req.body,
      image: req.file.path,
    })
    await newProduct.save();
    res.status(201).json({ message: "Producto creado exitosamente", data: newProduct });
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: "Error en el Server - Producto no creado", error: error });
    }
}

module.exports = {createProduct}
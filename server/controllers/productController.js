const Product = require("../models/productModel")

const createProduct = async (req, res) => {
    try {
    const { title, description, categories, sizes } = req.body; 
    const newProduct = new Product ({  //Creación del producto
      title,
      description,
      categories,
      sizes,
      image: req.file.path,
    })
    await newProduct.save();
    res.status(201).json({ message: "Producto creado exitosamente", data: newProduct });
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: "Error en el Server - Producto no creado", error: error });
    }
}



const updateProduct = async (req,res) =>{
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
    res.status(200).json({message: "Producto actualizado exitosamente", updatedProduct})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Producto no actualizado", error: error });
    }
}

const deleteProduct = async (req,res) =>{
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Producto eliminado exitosamente"})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Producto no eliminado", error: error });
    }
}

const getProduct = async (req,res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json({message:"Producto obtenido exitosamente: ", product })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Producto no encontrado", error: error });
  }
}

const getProducts = async (req,res) =>{
  try {
    const qlatest = req.query.latest;
    const qcategory = req.query.category;
    let product;
    if (qlatest) {
      product = await Product.find().sort({ createdAt: -1 }).limit(3)
    }
    else if(qcategory){
      product = await Product.find({categories: {$in: [qcategory] }}).sort({createdAt: -1 })
    }
    else{
      product = await Product.find({})
    }
    res.status(200).json({message:"Productos obtenidos exitosamente: ", product })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Productos no encontrados", error: error });
  }
}

module.exports = {createProduct, updateProduct, deleteProduct, getProduct, getProducts}
const Cart = require("../models/cartModel")

const addToCart = async (req,res) =>{
  const {userId, quantity, productId} = req.body;

  try {
    const product = await Product.findById(productId);
    if(!product){
      return res.status(404).json({message: "Producto no encontrado"})  //Control de stock y validación de producto
    }
    if (product.stock < quantity){
      return res.status(400).json({message: "No hay stock suficiente"})
    }
    let cart = await Cart.findOne({userId}) //Busco o creo el carrito si no existe
    if(!cart){
      cart = new Cart({userId, products: []})
    }
    const productIndex = cart.products.findIndex(item=>  item.productId === productId) //Verifico si el prod. ya existe en el carrito (sumo si existe, lo agrego si no)
    if(productIndex > -1){
      cart.products[productIndex].quantity += quantity
    } else {
      cart.products.push({productId, quantity})
    }
    await cart.save()

    product.stock -= quantity; //Una vez finalizado, restamos la cantidad comprada al stock 
    await product.save()

    res.status(200).json({message: "Producto agregado al carrito exitosamente", cart})

  } catch (error) {
      res.status(500).json({message: "Error en el servidor", error})
  }

}
const createCart = async (req, res) => {
    try {
    const newCart = new Cart (req.body)
    await newCart.save();
    res.status(201).json({ message: "Carrito creado exitosamente", data: newCart });
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: "Error en el Server - Carrito no creado", error: error });
    }
}
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.body.userId });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    const productIndex = cart.products.findIndex(item => item.productId === req.body.productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: "Producto no encontrado en el carrito" });
    }
    // Actualizamos la cantidad del producto solo si lo encontramos, ya que validamos antes. 
    cart.products[productIndex].quantity = req.body.quantity;
    await cart.save();

    res.status(200).json({ message: "Carrito actualizado exitosamente", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Carrito no actualizado", error: error });
  }
}



const deleteCart = async (req,res) =>{
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id)
    if(!deletedCart){
      return res.status(404).json({ message: "Error al eliminar, carrito no encontrado" });
    }
    res.status(200).json({message: "Carrito eliminado exitosamente", deletedCart})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Carrito no eliminado", error: error });
    }
}

const getCartItem = async (req,res) => {
  try {
    const cartItem = await Cart.findOne({userId: req.params.id})
    if(!cartItem){
      return res.status(404).json({ message: "Error al obtener, carrito no encontrado" });
    }
    res.status(200).json({message:"Carrito obtenido exitosamente: ", cartItem })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Carrito no encontrado", error: error });
  }
}

const getCartItems = async (req,res) =>{
  try {
    const cartITems = await Cart.find({})
    if(!cartITems){
      return res.status(404).json({ message: "Error al obtener, carritos no encontrados" });
    }
    res.status(200).json({message:"Carritos obtenidos exitosamente: ", cartITems })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Carritos no encontrados", error: error });
  }
}

module.exports = {createCart, updateCart, deleteCart, getCartItems, getCartItem, addToCart}
const Cart = require("../models/cartModel")

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
const updateCart = async (req,res) =>{
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
    res.status(200).json({message: "Carrito actualizado exitosamente", updatedCart})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Carrito no actualizado", error: error });
    }
}

const deleteCart = async (req,res) =>{
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Carrito eliminado exitosamente"})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Carrito no eliminado", error: error });
    }
}

const getCartItem = async (req,res) => {
  try {
    const cartItem = await Cart.findById(req.params.id)
    res.status(200).json({message:"Carrito obtenido exitosamente: ", cartItem })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Carrito no encontrado", error: error });
  }
}

const getCartItems = async (req,res) =>{
  try {
    const cartITems = await Cart.find({})
    res.status(200).json({message:"Carritos obtenidos exitosamente: ", cartITems })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Carritos no encontrados", error: error });
  }
}

module.exports = {createCart, updateCart, deleteCart, getCartItems, getCartItem}
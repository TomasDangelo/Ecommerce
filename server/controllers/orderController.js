const Order = require("../models/cartModel")

const createOrder = async (req, res) => {
    try {
    const newOrder = new Order(req.body)
    await newOrder.save();
    res.status(201).json({ message: "Orden creada exitosamente", data: newOrder });
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: "Error en el Server - Orden no creada", error: error });
    }
}
const updateOrder = async (req,res) =>{
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
    res.status(200).json({message: "Orden actualizado exitosamente", updatedOrder})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Orden no creada", error: error });
    }
}

const deleteOrder = async (req,res) =>{
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Orden eliminada exitosamente"})
  } catch (error) {
    console.error(error);
        res.status(500).json({ message: "Error en el Server - Orden no eliminada", error: error });
    }
}

const getUserOrder = async (req,res) => {
  try {
    const order = await Order.findById({userId: req.params.id})
    res.status(200).json({message:"Orden obtenida exitosamente: ", order })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Orden no encontrada", error: error });
  }
}

const getOrders = async (req,res) =>{
  try {
    const orders = await Order.find({})
    res.status(200).json({message:"Orden obtenida exitosamente: ", orders })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Orden no encontrada", error: error });
  }
}

module.exports = {createOrder, updateOrder, deleteOrder, getOrders, getUserOrder}
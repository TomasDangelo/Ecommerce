const Order = require("../models/cartModel")

const createOrder = async (req, res) => {
    try {
    const newOrder = new Order(req.body)
    await newOrder.save();
    res.status(201).json({ message: "Orden creada exitosamente", newOrder });
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
    const order = await Order.findOne({userId: req.params.id})
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

const getMonthlyIncome = async (req,res) =>{
    try {
        const date = new Date()
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
        const prevMonth = new Date(
            new Date(lastMonth.setMonth(lastMonth.getMonth() -1)))

        const monthlyIncome = await Order.aggregate([
            {
                $match: {
                    createdAt: {$gte: prevMonth}
                }
            },
            {
                $project: {
                    month: {$month: "$createdAt"},
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
 
        ])
        res.status(200).json({ message: "Ingreso mensual obtenido exitosamente", data: monthlyIncome });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el Server - Income no calculado", error: error });
    }
}

module.exports = {createOrder, updateOrder, deleteOrder, getOrders, getUserOrder, getMonthlyIncome}
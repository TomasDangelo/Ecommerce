const router = require("express").Router()
const { verifyToken, verifyAdmin } = require("../middleware/verifyToken")
const { createOrder, updateOrder, deleteOrder, getUserOrder, getOrders, getMonthlyIncome } = require("../controllers/orderController")


router.post("/", verifyToken, createOrder)
router.put("/:id", verifyAdmin, updateOrder)
router.delete("/:id", verifyToken, deleteOrder)
router.get("/:id", verifyToken, getUserOrder)
router.get("/", verifyToken, getOrders)
router.get("/stats/income", verifyAdmin, getMonthlyIncome)

module.exports = router
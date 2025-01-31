const router = require("express").Router()
const { verifyToken, verifyAdmin } = require("../middleware/verifyToken")
const { createOrder, updateOrder, deleteOrder, getUserOrder, getOrders } = require("../controllers/orderController")


router.post("/", createOrder)
router.put("/:id", verifyAdmin, updateOrder)
router.delete("/:id", verifyToken, deleteOrder)
router.get("/:id", verifyToken, getUserOrder)
router.get("/", verifyToken, getOrders)


module.exports = router
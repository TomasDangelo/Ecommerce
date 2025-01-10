const router = require("express").Router()
const {parsers} = require ("../utils/cloudinary")
const { verifyToken } = require("../middleware/verifyToken")
const { getCartItem, getCartItems, createCart, updateCart, deleteCart } = require("../controllers/cartController")

router.post("/", verifyToken, createCart)
router.put("/:id", verifyToken, updateCart)
router.delete("/:id", verifyToken, deleteCart)
router.get("/:id", verifyToken, getCartItem)
router.get("/", verifyToken, getCartItems)


module.exports = router
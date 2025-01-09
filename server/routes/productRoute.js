const router = require("express").Router()

const { createProduct } = require("../controllers/productController")
const { verifyAdmin } = require("../middleware/verifyToken")

router.post("/", verifyAdmin, createProduct)

module.exports = router
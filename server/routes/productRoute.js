const router = require("express").Router()
const {parsers} = require ("../utils/cloudinary")
const { createProduct } = require("../controllers/productController")
const { verifyAdmin } = require("../middleware/verifyToken")

router.post("/", verifyAdmin, parsers.single("image"), createProduct)

module.exports = router
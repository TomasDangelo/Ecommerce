const router = require("express").Router()
const {parsers} = require ("../utils/cloudinary")
const { createProduct, updateProduct, deleteProduct, getProduct, getProducts } = require("../controllers/productController")
const { verifyAdmin } = require("../middleware/verifyToken")

router.post("/", verifyAdmin, parsers.single("image"), createProduct)
router.put("/:id", verifyAdmin, parsers.single("image"),  updateProduct)
router.delete("/:id", verifyAdmin, deleteProduct)
router.get("/:id", getProduct)
router.get("/", getProducts)


module.exports = router
const router = require("express").Router()
const {parsers} = require ("../utils/cloudinary")
const { verifyToken } = require("../middleware/verifyToken")
const {createCart} = require("../controllers/cartController")


router.post("/", verifyToken, createCart)




module.exports = router
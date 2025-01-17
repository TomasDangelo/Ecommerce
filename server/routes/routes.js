const router = require("express").Router()
const userRoute = require("./usersRoute")
const authRoutes = require("./authRoutes")
const productRoute = require("./productRoute")
const cartRoute = require("./cartRoute") 
const orderRoute = require("./orderRoute")

const baseUrl = "/api";

router.use(`${baseUrl}/users`, userRoute)
router.use(`${baseUrl}/auth`, authRoutes)
router.use(`${baseUrl}/products`, productRoute)
router.use(`${baseUrl}/carts`, cartRoute)
router.use(`${baseUrl}/orders`, orderRoute)


module.exports = router;
const router = require("express").Router()
const userRoute = require("./usersRoute")
const authRoutes = require("./authRoutes")
const productRoute = require("./productRoute")

const baseUrl = "/api/v1";

router.use(`${baseUrl}/users`, userRoute)
router.use(`${baseUrl}/auth`, authRoutes)
router.use(`${baseUrl}/products`, productRoute)

module.exports = router;
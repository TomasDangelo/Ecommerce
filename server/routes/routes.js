const router = require("express").Router()
const userRoute = require("./usersRoute")
const authRoutes = require("./authRoutes")
const baseUrl = "/api/v1";

router.use(`${baseUrl}/users`, userRoute)
router.use(`${baseUrl}/auth`, authRoutes)

module.exports = router;
const router = require("express").Router()
const userRoute = require("./usersRoute")
const baseUrl = "/api/v1";

router.use(`${baseUrl}/users`, userRoute)

module.exports = router;
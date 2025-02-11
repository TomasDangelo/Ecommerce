const router = require("express").Router();
const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const { login, register } = require("../controllers/authController");

//Rutas a los métodos manejados en el authController.
router.post("/register", register)
router.post("/login", login)

module.exports = router;
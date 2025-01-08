const router = require("express").Router();
const User = require("../models/userModel")

router.post("/register", async(req, res) =>{
    try {
        const newUser = new User({ //Obtener datos del usuario para autenticacion
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        const user = await newUser.save(); //Crear nuevo usuario
        res.status(200).json({
            message: "Usuario creado exitosamente",
            data: newUser
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server "});
    }
} )

module.exports = router;
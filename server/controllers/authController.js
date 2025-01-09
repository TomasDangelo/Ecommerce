const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async(req, res) =>{ //Nuevo usuario
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);  // Bcrypt para proteger la password
        const newUser = new User({ //Obtener datos del usuario para autenticacion
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const user = await newUser.save(); //Crear nuevo usuario

        const {password, ...info} = newUser._doc;  //Ocultamos la pw para que no se vea en la solicitud post y solo pasamos el resto de la info
        res.status(200).json({
            message: "Usuario creado exitosamente",
            data: info
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server "});
    }
} 

const login = async(req,res)=>{ // Autenticamos si el usuario existe o no en caso de login
    try {

    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(401).json({ message: "Email no encontrado o registrado" });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(401).json({ message: "Email o contraseña incorrecta" });
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY, { expiresIn: '5d' }); //JWT -- Autenticación
    const {password, ...info} = user._doc;


    res.status(200).json({
        data: {...info, token},
        message: "Autenticación exitosa!",
    })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server "});
    }
}

module.exports = {
    register,
    login
}
const jwt = require("jsonwebtoken");

// Middleware para verificar el token
const verifyToken = (req, res, next) =>{
    const  authHeader = req.header("authorization"); //Obtener el token desde la cabecera Authorization
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token){return res.status(401).json({message: "Acceso denegado"});}

    try {
        const verified = jwt.verify(token, process.env.JWT_KEY)
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({message: "Token invalido"});
    }
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () =>{
        console.log(req.user);
        if (req.user.isAdmin){
            next()}
        else { 
            return res.status(403).send({ message: "El usuario no es admin" });
            }
    })
}

module.exports = {verifyToken, verifyAdmin};
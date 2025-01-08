const express = require("express");
const dbConnect = require("./dbConnection/dbConnection");
const app = express();
const routes = require("./routes/routes.js")


app.use(express.json()); //Configuración para aceptar solicitudes json

//-----------------------------------------------------------------------------//
app.use("/", routes);
app.get("/", (req,res)=>{
    res.send("Testeando backend");
})
app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000} `)
    dbConnect();
});


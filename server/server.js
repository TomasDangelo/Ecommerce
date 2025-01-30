const express = require("express");
const dbConnect = require("./dbConnection/dbConnection");
const app = express();
const routes = require("./routes/routes.js")
const cors = require('cors');





app.use(express.json()); //Configuración para aceptar solicitudes json
app.use(cors({ origin: 'http://localhost:3000' })); // Permite todas las solicitudes CORS
//-----------------------------------------------------------------------------//
app.use("/", routes);
app.use("./uploads", express.static("uploads"))

app.get("/", (req,res)=>{
    res.send("Testeando backend");
})
app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000} `)
    dbConnect();
});


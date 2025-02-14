const express = require("express");
const dbConnect = require("./dbConnection/dbConnection");
const app = express();
const routes = require("./routes/routes.js")
const cors = require('cors');


const allowedOrigins = [
    "http://localhost:3000", 
    "https://ruthpasteleria.vercel.app"
  ];


app.use(express.json()); //Configuración para aceptar solicitudes json
app.use(cors({ origin: allowedOrigins, methods: "GET,POST,PUT,DELETE", credentials: true })); // Permite todas las solicitudes CORS
//-----------------------------------------------------------------------------//
app.use("/", routes);
app.use(express.static('public', {
    maxAge: '1y',
    etag: false
  }));
  
app.get("/", (req,res)=>{
    res.send("Testeando backend");
})
app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000} `)
    dbConnect();
});


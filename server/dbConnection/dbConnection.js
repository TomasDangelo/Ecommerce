const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Conectarse a MongoDB

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a MongoDB correctamente");
    } catch (error) {
        console.log("Error conectandose a database:", error);
        
    }
}

module.exports = dbConnect;
const router = require("express").Router()

router.get("/get-users", (req, res)=>{
    res.send("Usuarios obtenidos")
})

module.exports = router;
const {updateUser, deleteUser, getAdmin, getAllUsers, getUserStats} = require("../controllers/userController");
const {verifyToken, verifyAdmin} = require("../middleware/verifyToken");

const router = require("express").Router()

router.get("/get-users", (req, res)=>{res.send("Usuarios obtenidos")}) // GET

router.put("/update/:id", verifyToken, updateUser) // PUT 
router.delete("/delete/:id", verifyAdmin, deleteUser) // DELETE
router.get("/get-admin/:id", verifyAdmin, getAdmin)
router.get("/", verifyToken, getAllUsers)
router.get("/stats", verifyAdmin, getUserStats)

module.exports = router;
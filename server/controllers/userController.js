const User = require("../models/userModel");

const updateUser =  async(req,res)=>{
    //Actualizar usuario
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});

        if (!updatedUser) {return res.status(404).json({ message: "Usuario no encontrado" });}

        res.status(200).json({ message: "Usuario actualizado exitosamente", data: updatedUser });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server "});
    }
} 

const deleteUser = async (req,res) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Usuario eliminado exitosamente"})
        }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Error al eliminar usuario "});
    }
}

const getAdmin = async(req, res) => {
    try {
        const admin = await User.findById(req.params.id);
        if (!admin) {return res.status(404).json({ message: "Usuario no encontrado" });}

    const {password, ... info} = admin._doc;
        res.status(200).json({ message: "Usuarios administradores", data: admin });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server  - administador no encontrado", error: error});
    }
}
const getAllUsers = async(req, res) => {
    const query = req.query.latest;
    try {
        const users = query? await User.find().sort({_id:-1}).limit(3) : await User.find(); //Limitamos los usuarios encontrados y los ordenamos - latest es bool
        res.status(200).json({ message: "Usuarios encontrados exitosamente", data: users });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el Server  - ususarios no encontrados", error: error});
    }
}

const getUserStats = async (req,res) =>{
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() -1));

        const userStats = await User.aggregate([
            {
                $match: {
                    createdAt: {$gte: lastYear}
                }
            },
            {
                $project:{
                    month: {$month: "$createdAt"},
                    count: {$sum: 1}
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$count"}
                }
            }
        ])
        res.status(200).json({ message: "Estadísticas de usuarios obtenidas exitosamente", data: userStats });
        }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Error al obtener estadísticas de usuario "});
    }
}

module.exports = {updateUser, deleteUser , getAdmin, getAllUsers, getUserStats};
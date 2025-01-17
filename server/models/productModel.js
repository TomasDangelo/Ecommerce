const mongoose = require("mongoose");
const {Schema} = mongoose;

const productModel = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: ""   
    },
    categories: {
        type: Array,
        default: []
    },
    size: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock:{
        type: Number,
        default: 0,
        min: 0,
        required: true,
    }

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Product", productModel);
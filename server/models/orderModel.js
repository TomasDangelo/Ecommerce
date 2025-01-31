const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderModel = new Schema({
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
    amount: {
        type: Number,
        required: true,
    },
    status:{
        type: String,
        default: "pending",
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"]
    },
    address: {
        type: Object,
        required: false,
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Order", orderModel);
var mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema(
    {
        product:{
            type:ObjectId,
            ref:"Product"
        },
        name:String,
        count:Number,
        price:Number
    }
)

const ProductCart = mongoose.model("ProductCart",ProductCartSchema)

var orderSchema = new mongoose.Schema(
    {
        product:[ProductCartSchema],
        transaction_id:{},
        amount:{
            type:Number
        },
        address:String,
        updated:Date,
        user:{
            type:ObjectId,
            ref:"User"
        },
        status:{
            type:String,
            defult:"Recieved",
            enum:["Cancelled", "Delivered","Shipped","Processing","Recieved"]
        }
    },
    {timestamps:true}
);

const Order = mongoose.model("Order",orderSchema)

module.exports = {Order,ProductCart}
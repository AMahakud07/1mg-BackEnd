import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    url:{type:String},
    use:{type:String},
    ratings:{type:Number},
    quantity:{type:Number},
    id:{type:String,}
})

const cartModel = mongoose.model('carts',cartSchema);
export default cartModel;
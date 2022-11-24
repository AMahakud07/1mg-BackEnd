import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{type:String}
})

const cartModel = mongoose.model('multivetamin',cartSchema);
export default cartModel

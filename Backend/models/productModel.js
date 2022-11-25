import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{type:String}
})

export const BrandsModel=mongoose.model('brands',ProductSchema);

export const TopsellerModel = mongoose.model('top_sellers',ProductSchema);

export const Disease_secModel = mongoose.model('diseases',ProductSchema);

export const MultivitaminsModel = mongoose.model('multivitamins',ProductSchema);
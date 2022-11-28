import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    name: { type: String },
    // url: { type: String },
    // price: { type: Number },
    // final_price: { type: Number },
    // ratings: { type: Number },
    // detail: { type: String },
    // use: { type: String },
    // brand: { type: String }

})

export const BrandsModel = mongoose.model('brands', ProductSchema);

export const TopsellerModel = mongoose.model('top_sellers', ProductSchema);

export const Disease_secModel = mongoose.model('diseases', ProductSchema);

export const MultivitaminsModel = mongoose.model('multivitamins', ProductSchema);

export const DevicesModel = mongoose.model('devices', ProductSchema);
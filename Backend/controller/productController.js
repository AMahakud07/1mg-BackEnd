import mongoose from "mongoose"
import {BrandsModel, Disease_secModel, MultivitaminsModel, TopsellerModel } from "../models/productModel.js";


export const Brands=async(req,res) =>{
    // const brands=mongoose.Collection(brands);
    let data= await BrandsModel.find();
    console.log(data);

    res.send({
        status:"true",
        data: data
    })
}

export const Topseller=async(req,res) =>{
    // const brands=mongoose.Collection(brands);
    let data= await TopsellerModel.find();
    console.log(data);

    res.send({
        // status:"true",
        data : data
    })
}
export const Disease=async(req,res) =>{
    // const brands=mongoose.Collection(brands);
    let data= await Disease_secModel.find();
    console.log(data);

    res.send({
        status:"true",
        data: data
    })
}
export const Multivitamins=async(req,res) =>{
    // const brands=mongoose.Collection(brands);
    let data= await MultivitaminsModel.find();
    console.log(data);

    res.send({
        status:"true",
        data: data
    })
}


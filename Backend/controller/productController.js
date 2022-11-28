import mongoose from "mongoose"
import {BrandsModel, DevicesModel, Disease_secModel, MultivitaminsModel, TopsellerModel } from "../models/productModel.js";

const brandOption = ["HealthVit","GNC","HealthyHey"]

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
    
  
    let {brand="all"}=req.query


    const page = parseInt(req.query.page) - 1 || 0;
	const limit = parseInt(req.query.limit) || 5;
    // let brand = req.query.brand || "all";
    // let useEntered = req.query.use || " ";

    let filter = {
            brand: {$in: (brand=="all") ? brandOption:brand.split(",")}
            // brand : { $in: ['HealthVit']} 
    }

    // sorting
    let data=[];

    console.log(req.query);

    if(req.query.order=="asc" && req.query.sortBy=="final_price"){
        
        data = await MultivitaminsModel.find(filter).sort({final_price:1}).skip(page * limit).limit(limit);

    }else if(req.query.order=="desc" && req.query.sortBy=="final_price"){

        data = await MultivitaminsModel.find(filter).sort({final_price:-1}).skip(page * limit).limit(limit);
    }
    else if(req.query.sortBy=="ratings"){
        data = await MultivitaminsModel.find(filter).sort({ratings:-1}).skip(page * limit).limit(limit);
    }
    else{
        data = await MultivitaminsModel.find(filter).skip(page * limit).limit(limit);
    }

    res.send({
            status:"true",
            page : page+1,
            limit: limit,
            data: data
    })

    
}

export const Devices=async(req,res) =>{
    // const brands=mongoose.Collection(brands);
    let data= await DevicesModel.find();
    console.log(data);

    res.send({
        status:"true",
        data: data
    })
}


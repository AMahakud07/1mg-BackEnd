import cartModel from "../Models/cartModel.js";


export const cartProduct=async(req,res) =>{
    try {
        let data= await cartModel.find();
        console.log(data);
        res.status(200).send({
            status:"true",
            data:data
        })
    } catch (error) {
       return res.status(500).send({
        status: "Ërror",
        message:"Something went wrong"
       }) 
    }
   
}









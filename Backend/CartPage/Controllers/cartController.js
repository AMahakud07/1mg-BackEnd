
// import mongoose from "mongoose";
import cartModel from "../Models/cartModel.js";


// get the  get Cart data all data
export const getCartdata = async (req,res)=>{
    let Data = await cartModel.find();
    res.send({
        status:"succes",
        data:Data,
    })
}

//get cart product
export const cartProduct=async(req,res) =>{
    const {user} = req.params;
   try{
     if(user){
        let data = await cartModel.find({userid:user});
        if(data.length!=0){
            res.send({
                status:"true",
                data:data
            })
        }else{
            res.send({
                status:"true",
                data:"Cart is Empty"
            })
        }
       
    }else{
        res.send({
            status:"false",
            data:"Enter valid details"
        })
    }
   }catch(error){
    res.status(500).send({
        status:"false",
        data:error
    })
   }
}

// export const addCart = async(req,res) =>{
//     try{
//     let body=req.body;
//     console.log(body)
//     if(body){
//         body={...body,quantity:0}
//         const cart=new cartModel(body)
//         const result = await cart.save();
//         res.send({
//             status:"success",
//             data:result
//         })
//     }else{
//         res.status(400).send({
//             status:"false",
//             data:"Enter valid details"
//         })
//     }
//     }catch(error){
//         res.status(500).send({
//             status:"false",
//             data:error.message
//         })
//     }
// }

//post cart data request
export const addCart = async (req,res)=>{
    try {
        let cart = new cartModel(req.body)
        if(cart){
            
            let postCartData = await cart.save();
            res.status(200).send({
                status:"success",
                data: postCartData
            })
        }
        else{
            res.status(400).send({
                status:"false",
                data:"Enter necessary details"
            })
        }
    } catch (error) {
        res.status(500).send({
            status:"false",
            data:error.message
        })
    }
}

export const updateCart=async(req,res) => {
   try{
    const {id}=req.params;
    console.log(id)
    let body = req.body.quantity;
    if(id){
        let data = await cartModel.findByIdAndUpdate( id,{quantity:body});
        res.send({
            status:"success",
            data:data
        })
    }else{
        res.status(400).send({
            status:"false",
        })
    }
   }catch(err){
    res.status(500).send({
        status:"false",
        data:err.message
    })
   }
}


export const deleteCart = async(req,res) =>{
    try{
        const {id} = req.params;
        console.log(id)
        if(id){
            let data = await cartModel.findByIdAndRemove(id);
            res.send({
                status:"true",
                data:data,
                message:"deleted successfully"
            })
        }else{
            res.status(500).send({
                status:"false",
                data:"ID NOT FOUND"
            })
        }
    }catch(error){
        res.status(500).send({
            status:"false",
            data:error
        })
    }
}








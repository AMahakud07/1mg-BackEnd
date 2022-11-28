import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors';
import {addCart,cartProduct, deleteCart, updateCart , getCartdata} from './Controllers/CartController.js'

const app = express();
app.use(express.json())
app.use(cors());


app.get("/",(req,res)=>{
   return res.send("Welcome to 1mg website")
})

app.get("/cart", getCartdata);

app.get('/cart/:user',cartProduct);
app.post('/cart',addCart);
app.delete('/cart/:id',deleteCart);
app.patch('/cart/:id',updateCart);
app.get('/cart', cartProduct)


// const PORT = process.env.PORT || 8080

app.listen(8080,()=>{
    try{
        connection();
        console.log("Listening on Port:- http://localhost:8080")
    }catch(error){
        console.log(error)
    }
} )

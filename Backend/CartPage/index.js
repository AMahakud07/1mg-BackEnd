import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors'
import { cartProduct } from './Controllers/CartController.js'

const app = express()
app.use(express.json())
app.use(cors());

// app.get("/",(req,res)=>{
//    return res.send("welcome")
// })

app.get('/cart',cartProduct)

app.get("/",(req,res)=>{
    return res.status(200).send("Welcome")
})






app.listen(8080,()=>{
    try{
        connection();
    }catch(e){
        console.log(e)
    }
} )

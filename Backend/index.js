import express from "express";
import mongoose  from "mongoose";
import connection from "./configs/db.js";
import { Brands, Devices, Disease, Multivitamins, Topseller } from "./controller/productController.js";

const app= express();
app.use(express.json());

app.get('/brands',Brands);
app.get('/topsellers',Topseller);
app.get('/diseases', Disease);
app.get('/multivitamins', Multivitamins);
app.get('/devices', Devices);

app.listen(3050,()=>{
    connection();
    console.log("Connected to DB")
});




import express from "express";
// const { register, login } = require("./controller/auth.controller");
import connection from "./configs/db.js";
import { Brands, Devices, Disease, Multivitamins, Topseller } from "./controller/productController.js";


const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

app.get('/brands',Brands);
app.get('/topsellers',Topseller);
app.get('/diseases', Disease);
app.get('/multivitamins', Multivitamins);
app.get('/devices', Devices);

app.listen(3050,()=>{
    connection();
    console.log("Connected to DB")
});




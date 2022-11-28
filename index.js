import express from "express";
// const { register, login } = require("./controller/auth.controller");
import connection from "./configs/db.js";
import { login, register } from "./controllers/auth.controller.js";
import { addCart, cartProduct, deleteCart, getCartdata, updateCart } from "./controllers/cartController.js";
import { Brands, Devices, Disease, Multivitamins, Topseller } from "./controllers/product.controller.js";


// const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(cors());

app.post("/register", register);
app.post("/login", login);

app.get('/brands', Brands);
app.get('/topsellers', Topseller);
app.get('/diseases', Disease);
app.get('/multivitamins', Multivitamins);
app.get('/devices', Devices);




app.get("/cart", getCartdata);

app.get('/cart/:user', cartProduct);
app.post('/cart', addCart);
app.delete('/cart/:id', deleteCart);
app.patch('/cart/:id', updateCart);
app.get('/cart', cartProduct)


app.listen(3050, () => {
    connection();
    console.log("Connected to DB")
});




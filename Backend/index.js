const express = require("express");
const connection = require("./configs/db");
const { register, login } = require("./Controllers/auth.controller");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);
const port = 7070;

app.listen(port, async (req, res) => {
  try {
    await connection();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});

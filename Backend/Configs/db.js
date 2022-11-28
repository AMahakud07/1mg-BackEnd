const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhishek:bhubaneswar@cluster0.mpmdpu0.mongodb.net/1mg?retryWrites=true&w=majority"
    );
    console.log("DB CONNECTION ESTABLISHED");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connection;

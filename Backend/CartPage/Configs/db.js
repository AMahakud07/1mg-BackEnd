import mongoose from 'mongoose'
const connection = async() => {
   try{
     mongoose.connect("mongodb+srv://Pranesh1221:Pranesh1207@cluster0.wi89nuv.mongodb.net/?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true
      })
    console.log("DB CONNECTION ESTABLISHED")
   }catch(err){
        console.log(err)
   }
}

export default connection;

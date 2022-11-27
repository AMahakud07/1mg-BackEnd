import mongoose from 'mongoose'
const connection = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://abhishek:bhubaneswar@cluster0.mpmdpu0.mongodb.net/1mg?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('DB CONNECTION ESTABLISHED');
  } catch (err) {
    console.log(err)
  }
}
export default connection;

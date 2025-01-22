import mongoose from "mongoose";

//Function to connect to the mongoDB databse

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB connected');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Job_Portal`)
}
export default connectDB;
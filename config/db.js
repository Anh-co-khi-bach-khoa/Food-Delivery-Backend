import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://tuanpro220203:22022003@cluster0.tpscgoh.mongodb.net/food-del').then(()=>console.log("DB connected"))
}
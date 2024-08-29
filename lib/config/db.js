import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Hemanthsai:abcd@blog.3tds3.mongodb.net/blog-app')
    console.log("DB Connected");
}
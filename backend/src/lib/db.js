import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
    const connect = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connection Succesful: ",connect.connection.host);
    }
    catch(error){
        console.error("Error connecting Database",error);
        process.exit(1);
    }
}
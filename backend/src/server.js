import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js"
//defining App 
const app = express();

dotenv.config()
app.use(express.json())

const __dirname = path.resolve()

const PORT = process.env.PORT;

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))


    app.get("/.*/",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(PORT, ()=>{ console.log("Server runnning on port "+PORT),
    connectDB()
});
 
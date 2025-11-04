import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js";


export const signup = async (req,res)=>{
    const {FullName , email, password} = req.body;

    try{
        if (!FullName || !email || !password){
            return res.status(400).json({message:"All the fields are required"});
        }
        if (password.length < 7){
            return res.status(400).json({message:"Password should be atleast 8 characters"
            })
        }

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Enter a valid email" });
}


        const user = await User.findOne({email});
        if (user) return res.status(400).json({message:"Use a different mail to sign-up"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);


        const newUser = new User({
            FullName,
            email,
            password: hashedPassword

        })

        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.FullName,
                email: newUser.email
            })
        }
        else{
            res.status(400).json({
                message: "Invalid Request on user data"
            })
        }
    }
    catch(error){
        console.error("Error in signup controller",error)
        res.status(500).json({
            message:"Internal server Error"
        })
       }
}


export const signin = (req,res)=>{
    res.send("Sign-in end point");
}


export const signout = (req,res)=>{
    res.send("Sign-out end point");
}

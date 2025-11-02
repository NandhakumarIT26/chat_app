import exporess from 'express';
const router = exporess.Router();


router.get("/",(req,res)=>{
    res.send("Welcome to the chat app");
})

router.get("/login",(req,res)=>{
    res.send("Login end Point");
})


router.get("/logout",(req,res)=>{
    res.send("Logout end Point");
})


router.get("/signup",(req,res)=>{
    res.send("Sign-up end Point");
})


router.get("/signout",(req,res)=>{
    res.send("Sign-out end Point");
})



export default router;


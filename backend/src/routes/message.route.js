import express from 'express';

const router = express.Router();

router.get("/send", (req,res)=>{
    res.send("Send message end point");
});


router.get("/receive",(req,res)=>{
    res.send("Message receive end-point");
})



export default router;
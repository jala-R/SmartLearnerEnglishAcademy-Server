const express=require("express"),
    app=express.Router(),
    adminveriifaction=require("../helper/adminVerification"),
    Contact=require("../db/contact"),
    User=require("../db/user"),
    Feedback=require("../db/feedback");


// app.use(adminveriifaction)


app.get("/isAdmin",adminveriifaction,(req,res)=>{
    res.send();
})


app.get("/get-users",adminveriifaction,async (req,res)=>{
    try{
        let users=await User.find({}).sort({createdAt:-1}).limit(15);
        res.send(users);
    }catch(err){
        res.status(400).send(err.message);
    }
    
})

app.get("/get-contact",adminveriifaction,async (req,res)=>{
    try{
        let contact=await Contact.find({}).sort({createdAt:-1}).limit(15);
        res.send(contact);
    }catch(err){
        res.status(400).send(err.message);
    }
})

app.get("/get-feedback",adminveriifaction,async (req,res)=>{
    try{
        let feedback=await Feedback.find({}).sort({rating:-1,createdAt:-1}).limit(15);
        res.send(feedback);
    }catch(err){
        res.status(400).send(err.message);
    }
})

app.get("/count",adminveriifaction,async (req,res)=>{
    try{
        let user=await User.find({});
        let contact=await Contact.find({});
        let feedback=await Feedback.find({});
        res.send({
            userCnt:user.length,
            contactCnt:contact.length,
            feedbackCnt:feedback.length
        })
    }catch(err){
        res.status(400).send(err.message)
    }
})


module.exports=app;
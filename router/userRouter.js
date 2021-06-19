const express=require("express")
const router=express.Router()
const User=require("../model/user")
const validator = require("validator");

router.post("/user",async(req,res)=>{
    if (!validator.isEmail(email)) {
        return res.status(400).json("Please provide a valid email address");
      }else{

      
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    })
}
try{
        await user.save()
console.log(user)
        res.send(user)
    }
    catch(err){
        res.status(501).json({success:false,error:err})
    }
})

router.get("/user",async(req,res)=>{
  try{
  const result=await User.find()
  res.send(result)
  }catch(err){
      res.status(501).json({success:false,errror:err})
  }
})
router.delete("/user/:id",async(req,res)=>{
    try{
        const result = await User.findByIdAndDelete(req.params.id)
        res.send(result)
    }catch(err){
        res.status(501).json({success:false,error:err})
    }
})
router.patch("/user/:id",async(req,res)=>{
    if(req.body.email!=undefined){
        res.status(500).json({success:false,error:"email can't be updated"})
      }else{
    try{
            User.findOneAndUpdate({_id:req.params.id}, req.body, function (err, user) {
                res.send(user);   
      });
    }
    catch(err){
        res.status(501).json({success:false,error:err})
    }
}
  })

module.exports=router
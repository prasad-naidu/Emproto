const mongoose=require("mongoose")

const DBconnection=async()=>{
try{
const connect= await mongoose.connect("mongodb://localhost:27017/client",{useNewUrlParser:true})
console.log("connected to db")
}
catch(err){
    console.log(err)
}
}

module.exports=DBconnection
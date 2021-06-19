const mongooose=require("mongoose")

const userSchema=mongooose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:Number,
        required:true

    },

})

const User=mongooose.model("User",userSchema)

module.exports=User
const express = require('express')

const app=express()
const DBconnection=require("./db/db")
const router= require("./router/userRouter")
const port=3009
app.use(express.json())
app.use("/",router)

DBconnection()
app.listen(port,()=>{
    console.log("listening....")
})
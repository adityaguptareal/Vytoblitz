const mongoose=require("mongoose")
const schema=mongoose.Schema
const objectId=mongoose.Types.objectId

const userSchema= new schema({
    "email":{type:String,unique:true},
    "password":String,
    "role":String,
    "firstName":String,
    "lastName":String,
})
const adminSchema= new schema({
    "email":{type:String,unique:true},
    "password":String,
    "role":String,
    "firstName":String,
    "lastName":String,
})

const userModel=mongoose.model("users",userSchema)
const adminModel=mongoose.model("admin",userSchema)
module.exports=({
    userModel,
    adminModel
})
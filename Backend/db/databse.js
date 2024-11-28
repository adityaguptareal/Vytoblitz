const mongoose=require("mongoose")
const user=new mongoose.Schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String
})
const admin=new mongoose.Schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String
})

const userModel=mongoose.model("usermodel",user)
const adminModel=mongoose.model("adminmodel",admin)

module.exports={
    userModel,
    adminModel
}
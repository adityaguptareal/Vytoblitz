const express=require("express")
const app=express()
const port=3000
const {userRouter}=require("./Routes/userRoutes")
const {adminRouter}=require("./Routes/adminRoutes")
const mongoose = require("mongoose")
const {mongooseURL}=require("./config")
app.use(express.json())

app.use("/api/v1/user",userRouter)
app.use("/api/v1/admin",adminRouter)
async function main() {
    try {
        await mongoose.connect(mongooseURL)
    } catch (error) {
        res.status(403).json({msg:"Error while connecting"})
    }
    app.listen(port,()=>{
        console.log('App is running at port', port);
        
    })
}
main()
require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const port=process.env.port
const {userRouter}=require("./Routes/UserRoutes")
const MONGODB_URI=process.env.MONGODB_URI
app.use(express.json())

app.use("/api/v1/user",userRouter)
// app.use("/api/v1/admin")

async function main() {
    try {
        await mongoose.connect(MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}
main()

app.listen(port,()=>{
    console.log('App is running at',port);
    
})
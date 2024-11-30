const { Router } = require("express")
const userRouter = Router()
const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { z } = require("zod")
const {userModel} = require("../Database/Database.js")

userRouter.post("/signup", async function (req, res) {
 try {
    
    const requiredData = z.object({
        email: z.string().max(80),
        password: z.string().min(8).max(15),
        role: z.string().min(2).max(10),
        firstName: z.string().min(4).max(10),
        lastName: z.string().min(4).max(10),
    })
    const validateData = requiredData.safeParse(req.body)
    if (!validateData.success) {
        res.status(405).json({ status: "Not allowed", msg: validateData.error })
        return
    }
    const {email,password,role,firstName,lastName}=validateData.data
    const hashedPassword= await bcrypt.hash(password,8)
    const creatingUser=await userModel.create({
        email:email,
        password:hashedPassword,
        role:role,
        firstName:firstName,
        lastName:lastName
    })
    res.status(200).json({status:"Ok",msg:"user successfully created"})
} catch (error) {
     res.status(503).json({status:"error",msg:"Error in endpoint",err:error})
 }
})

module.exports = ({
    userRouter
})
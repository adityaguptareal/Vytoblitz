const { Router } = require("express")
const userRouter = Router()
const { z, string } = require("zod")
const { userModel, adminModel } = require("../db/databse")

userRouter.post("/signup", async function (req, res) {
    const requiredData = z.object({
        email: z.string().min(3),
        password: z.string().min(3).max(15),
        firstName: z.string().min(3).max(20),
        lastName: z.string().min(3).max(20)
    })
    const parsingData = requiredData.safeParse(req.body)
    if (!parsingData.success) {
        res.status(400).json({ msg: "Invalid Format", error: parsingData.error })
        return
    }
    const { email, password, firstName, lastName } = req.body
    try {
        const userRecords = await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.status(200).json({ msg: "user signup successfully" })

    } catch (error) {
        res.status(403).json({ msg: error })
    }

})

userRouter.post("/signin", async function (req, res) {
    const vaildationData = z.object({
        email: z.string().min(3).max(40),
        password: z.string().min(3).max(20)
    })
    const parseData = await vaildationData.safeParse(req.body)
    console.log(req.body);
    
    if (!parseData.success) {
        res.status(403).json({ msg: parseData.error, error: "Invalid Format" })
        return
    }
    try {
        const { email, password } = req.body
        const searchUser = await userModel.findOne({
            email: email,
            password: password
        })
        res.json({ msg: "user signedin successfully" })
    } catch (error) {
        res.status(400).json({ msg: error })
    }



})

module.exports = { userRouter }
const { Router } = require("express")
const adminRouter = Router()
const { z } = require("zod")
const { adminModel } = require("../db/databse")

adminRouter.post("/signup", async function (req, res) {
    const requiredData = z.object({
        email: z.string().min().max(40),
        password: z.string().min().max(30),
        firstName: z.string().min().max(20),
        lastName: z.string().min().max(20)
    })
    const parseData = requiredData.safeParse(req.body)
    if (!parseData.success) {
        res.status(400).json({ msg: "Invalid Format", error: parseData.error })
        return
    }
    const { email, password, firstName, lastName } = req.body

    try {
        const creatingAdmin = await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        res.status(200).json({ msg: "Admin signup successfully" })
    } catch (err) {
        res.status(400).json({ error: err })
    }
})
adminRouter.get("/",function (req,res) {
    res.json({msg:"You are on the admin endpoint"})
})
adminRouter.post("/signin", async function (req, res) {
    const requiredData = z.object({
        email: z.string().min(2).max(30),
        password: z.string().min(3).max(40)
    })
    const dataParse = requiredData.safeParse(req.body)
    if (!dataParse.success) {
        res.status(400).json({ msg: "Invalid Format", error: dataParse.error })
    }
    const { email, password } = req.body
    try {
        const checkingAdmin = await adminModel.findOne({
            email: email,
            password: password
        })
        res.status(200).json({ msg: "user signin successfull" })
    } catch (error) {
        res.status(400).json({ msg: "eror while searching", error: error })
    }
})

module.exports = {
    adminRouter: adminRouter
}
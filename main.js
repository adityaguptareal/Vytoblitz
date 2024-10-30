const express = require("express")
const app = express()
const port = 3000
const { userRouter } = require("./Routes/userRoutes")
const { adminRouter } = require("./Routes/adminRoutes")
const mongoose = require("mongoose")
require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL
app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
async function main() {
    try {
        await mongoose.connect(MONGODB_URL)
    } catch (error) {
        console.log(error);

    }
    app.listen(port, () => {
        console.log('App is running at port', port);
        

    })

}
main()
const express = require("express")
const PORT = 1111
const db = require("./config/database")
const router = require("./routes/userRoute")

const app = express()
app.use(express.json())
app.use("/api", router)


app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})


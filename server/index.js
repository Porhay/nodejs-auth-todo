require('dotenv').config()
const db = require('./db')
const express = require('express')
const cors = require("cors");

const router  = require('./routes')


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await db.authenticate()
        await db.sync()
        app.listen(PORT, () => { console.log(`Server has been started on port ${PORT}`) })
    } catch (e) {
        console.log(e)
    }
}


start()
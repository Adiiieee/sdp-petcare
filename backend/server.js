const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/users')
const petUrls = require('./routes/pets');
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.use('/app',petUrls);
app.listen(4000||process.env.PORT, () => console.log("server is up and running"))


const express = require('express')
const app = express()
const startConnection = require("./dbConfig/startConnection")
require('dotenv').config()
const port = process.env.PORT
const User = require("./Routes/User")
app.use(express.json())

app.use("/api",User)

startConnection(app,port);
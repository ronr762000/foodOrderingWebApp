const express = require('express')
const app = express()
const startConnection = require("./dbConfig/startConnection")
require('dotenv').config()
const port = process.env.PORT

app.get("/",(req,res) => {
    res.send("Hello World");
})
startConnection(app,port);
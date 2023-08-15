const connectDB = require('./connection')
require('dotenv').config()
const startConnection = async(app,port)=>{
    try{
    await connectDB(process.env.MONGO_DB_CONNECTION_STRING)
    app.listen(port,console.log(`server is listening on ${port}`))
    } catch(error){
        console.log(error);
    }
}

module.exports = startConnection
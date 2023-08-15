const User = require("../models/User")
const UserRepo = require("../Repository/UserRepo")
const createUser = async (req,res) => {
    let user
    try{
    user = await UserRepo.createUser(req.body)
    }catch(err) {
        console.log("User can not be created", err)
    }
    return res.status(201).json({message: user})
}
module.exports = { createUser}
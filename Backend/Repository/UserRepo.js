const User = require("../models/User")

const UserRepo = {
    createUser: q => User.create(q)
}

module.exports = UserRepo
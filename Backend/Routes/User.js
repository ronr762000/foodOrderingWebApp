const express = require('express')
const { createUser} = require('../Controller/User')
const router = express.Router()

router.post('/v1/createUser', createUser)

module.exports = router
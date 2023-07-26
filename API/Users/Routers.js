const express = require('express')
const Router = express.Router()
const {GetUserProfile, Login, Signup} = require('./Controller')

Router.get('/getuserprofile', GetUserProfile)
Router.post('/login', Login)
Router.post('/signup', Signup)

module.exports = Router
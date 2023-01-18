const express = require('express')
const AuthController = require("../../controller/admin/auth.controller")


class AuthRoute extends AuthController
{

    constructor() {
        super()
        this.router = express.Router()
    }
    
    routes() {
        this.router.post('/login', this.login)
        this.router.post('/forgot-password', this.forgotPassword)

        return this.router
    }
    
}

module.exports = AuthRoute
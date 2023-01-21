const express = require('express')
const AuthController = require("../../controller/admin/auth.controller")
const validation = require("../../repository/auth/validation/auth.validation")
const validate = require('../../utils/validate')


class AuthRoute extends AuthController
{

    constructor() {
        super()
        this.router = express.Router()
    }
    
    routes() {
        
        this.router.post('/login', validate(validation.login), this.login)
        this.router.post('/forgot-password', validate(validation.forgotPassword), this.forgotPassword)

        return this.router
    }
    
}

module.exports = AuthRoute
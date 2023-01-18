const express = require('express');
const AuthRoute = require('./auth');
const auth = new AuthRoute

class AdminRoute
{

    constructor() {
        this.router = express.Router()
    }
    
    routes() {
        
        this.router.use('/auth', auth.routes())

        return this.router
    }
    
}

module.exports = AdminRoute
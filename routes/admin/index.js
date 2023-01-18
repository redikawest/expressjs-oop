const express = require('express');
const AuthRoute = require('./auth');

// const routes = express.Router()

// const auth = new AuthRoute

// routes.use('/auth', auth.routes());
// // routes.use('/customer', customer);
// // routes.use('/staff', staff)

// module.exports = routes


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
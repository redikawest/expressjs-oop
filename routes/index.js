const express = require('express');
const AdminRoute = require('./admin');
const WebRoute = require('./web');
const MobileRoute = require('./mobile');

const admin = new AdminRoute
const web = new WebRoute
const mobile = new MobileRoute

class Route
{

    constructor() {
        this.router = express.Router()
    }
    
    routes() {
        
        this.router.use('/api/server', admin.routes())
        this.router.use('/api/web', web.routes())
        this.router.use('/api/mobile', mobile.routes())

        return this.router
    }
    
}

module.exports = Route
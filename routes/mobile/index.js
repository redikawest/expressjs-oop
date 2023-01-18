const express = require('express');


class MobileRoute
{

    constructor() {
        this.router = express.Router()
    }
    
    routes() {
        
        // define routes

        return this.router
    }
    
}

module.exports = MobileRoute
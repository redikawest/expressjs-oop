const express = require('express');


class WebRoute
{

    constructor() {
        this.router = express.Router()
    }
    
    routes() {
        
        // define routes

        return this.router
    }
    
}

module.exports = WebRoute
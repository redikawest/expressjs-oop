const express = require('express');
const admin = require('./admin')
const web = require('./web')
const mobile = require('./mobile');
const AdminRoute = require('./admin');

const auth = new AdminRoute


const routes = express.Router()

routes.use('/api/server', auth.routes())
// routes.use('/web', web)
// routes.use('/mobile', mobile)

module.exports = routes
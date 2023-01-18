const bodyParser = require('body-parser');
const express = require('express');
const Route = require('./routes');

const app = express();
const routes = new Route

app.use(bodyParser.json({ limit: '5mb', extended: true, type: 'application/json' }));
app.use(routes.routes())


module.exports = app;
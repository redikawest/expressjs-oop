const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json({ limit: '5mb', extended: true, type: 'application/json' }));
app.use(routes)


module.exports = app;
require('dotenv').config();
const express = new require('express');
const app = express();
const path = require('path');
const rootDir = process.cwd();
const routes = require('./routes/web');

app.use(express.json());
app.use('/public', express.static(path.join(rootDir, 'src/public')));

// Configuration
require('./configs/viewsEngine')(app, path.join(rootDir, '/src'));

app.use('/', routes);

module.exports = app;
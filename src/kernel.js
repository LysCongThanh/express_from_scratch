require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const rootDir = process.cwd();
const configs = require('./configs/kernel');
const sql = require('sqlite');
const expressLayout = require('express-ejs-layouts');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

app.port = configs.app.port;

app.url = (url) => {
    return configs.app.url+url;
}

app.db = configs.db;

app.use(express.json());

app.use('/public', express.static(path.join(rootDir, 'src/public')));

configs.view_engine(app, path.join(rootDir, '/src'));

app.use(expressLayout);

app.set('layout', 'layouts/main');

app.use((req, res, next) => {
    res.locals.appUrl = (url = '/') => { return app.url(url) };
    next();
})

/* Serving Api routes */

app.use('/' + configs.app.api_prefix, apiRoutes);

// Api 404 handler
app.use('/' + configs.app.api_prefix, (req, res, next) => {
    res.status(404).render('error/404', {layout: 'layouts/error'});
});

// Api 500 handler
app.use('/' + configs.app.api_prefix, (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error/500', {layout: 'layouts/main'});
});

/* Serving web routes */

app.use('/', webRoutes);

/* Web 404 handler */

app.use('/', (req, res, next) => {
    res.status(404).render('error/404', {layout: 'layouts/error'});
});

/* Web 500 handler */
app.use('/', (req, res, next) => {
    res.status(500).render('error/500', {layout: 'layouts/main'});
});

/* Export application */

module.exports = app;
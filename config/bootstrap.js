const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const path = require('path');
const helmet = require('helmet');
const express = require('express');

module.exports = (app) => {

    app.set('trust proxy', 1);
    app.use(helmet({}));

    app.use(favicon(path.join(__dirname, '../assets/images/', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, '../assets/')));

    app.use(helmet.noCache({'Cache-Control': 'max-age=86400'}));

    app.use(cookieParser(process.env.COOKIE_SECRET || 'oops, forgot the var'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended : false} ));

    return app;
};

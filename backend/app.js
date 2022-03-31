require('dotenv').config()
const express = require('express');

const configExpress = require('./config/express')
const configureExpress = require('./config/express')
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

configExpress(app)
connectDB();
configureExpress(app);
routes(app);

const port = process.env.PORT || 8080;


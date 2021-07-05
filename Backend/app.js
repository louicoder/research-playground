const express = require('express');
const app = express();

// connection mongodb
const db = require('./Connection')
// run the connection
db();

// middlerware


// routes

module.exports = app
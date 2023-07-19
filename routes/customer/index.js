const express = require('express');

const router = express.Router();

const blogRoutes = require('./blog');
const fileRoutes = require('./file');

const authRoutes = require('./auth');

blogRoutes(router);
authRoutes(router);
fileRoutes(router);

module.exports = router;

const express = require('express');

const router = express.Router();

const authRoutes = require('./auth');

const roleRoutes = require('./role');

authRoutes(router);
roleRoutes(router);

module.exports = router;

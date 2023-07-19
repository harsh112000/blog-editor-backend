const express = require('express');

const router = express.Router();
const pingRoutes = require('./ping');
const healthCheckRoutes = require('./healt-check');

pingRoutes(router);
healthCheckRoutes(router);

module.exports = router;

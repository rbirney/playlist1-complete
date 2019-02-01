'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

module.exports = router;

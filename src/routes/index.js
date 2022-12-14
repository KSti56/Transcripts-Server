/**
 * @name Transcripts-Server
 * @file Contains all the routes for the Transcripts Server
 * @author ThisLightMan <light@corebot.dev>
 * @license MIT
 * @version 0.1-DEV
 */

// Router Setup
const express = require('express')
const router = express.Router()

// Routes
router.use('/api', require('./api'))

module.exports = router

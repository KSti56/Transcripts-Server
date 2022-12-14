/**
 * @name Transcripts-Server
 * @file Contains all the routes for the API path
 * @author ThisLightMan <light@corebot.dev>
 * @license MIT
 * @version 1.0-BETA
 */

// Router Setup
const express = require("express");
const router = express.Router();

// Routes
router.use("/v1", require("./api-versions/v1"));

module.exports = router;
/**
 * @name Transcripts-Server
 * @file Main entry point for the Transcripts Server
 * @author ThisLightMan <light@corebot.dev>
 * @license MIT
 * @version 1.0-BETA
 */

// Dependencies
const express = require("express");

// Utilities
const log = require("./utils/log");

// Initialize Express
const app = express();

// EJS (View Engine) Setup
app.set("view engine", "ejs");
app.set("views", "src/views");

// Static Files Setup (CSS, JS, Images, etc.)
app.use(express.static("src/public"));

// Routes
app.use("/", require("./routes/index"));

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile("404.html", { root: "src/public" });
});

// Start Server
app.listen(config.express.ip, config.express.port, () => {
    log(`Server started at ${config.express.ip}:${config.express.port}`);
});
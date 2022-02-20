const express = require("express");
const path = require("path");

// Fremework application
const app = express();

// Index file to open react application
const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// Call from dist directory
app.use(express.static(DIST_DIR));

// Start JSON
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(process.env.port || 3000);
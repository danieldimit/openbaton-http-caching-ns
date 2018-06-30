const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var url = require("url");
var path = require('path');
var DIST_DIR = path.join(__dirname, "./src/");
var d = new Date();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use("/src", express.static(DIST_DIR));

app.get("/src/VNFManager.mp4", function (req, res) {
    var d = new Date();
    console.log("Video fetched at:", new Date().toLocaleString());

    // max-age is in seconds
    res.setHeader("Cache-Control", "public, max-age=60");
    console.log(req.url);
    res.sendFile(path.join(DIST_DIR, "VNFManager.mp4"));
});

app.get("*", function (req, res) {
    var d = new Date();
    console.log("Video fetched at:", new Date().toLocaleString());

    // max-age is in seconds
    res.setHeader("Cache-Control", "public, max-age=60");
    console.log(req.url);
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(4312, function () {
    console.log("App listening on port 4312!");
});

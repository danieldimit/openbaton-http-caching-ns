const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var path = require('path');
var DIST_DIR = path.join(__dirname, "./src/");
var d = new Date();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
    var d = new Date();
    console.log("Video fetched at:", new Date().toLocaleString());
    res.setHeader("Cache-Control", "public, max-age=10");
    res.setHeader("Expires", new Date(Date.now() + 1000).toUTCString());

    console.log("HERE E",JSON.stringify(res.headers));
    res.end("hello world");
    //res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(4312, function () {
    console.log("App listening on port 4312!");
});

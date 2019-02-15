// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3333;

// Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// HTML Routes
require("./app/routing/htmlRoutes.js")(app, path);

// API Routes
require("./app/routing/apiRoutes.js")(app);


// Server
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
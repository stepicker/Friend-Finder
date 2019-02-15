module.exports = function(app) {

    // Catch-all Route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });
    
    // Survey Page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });

}
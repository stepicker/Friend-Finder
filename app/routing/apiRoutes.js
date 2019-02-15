module.exports = function(app) {

    var friendsArray = require("../data/friends.js");

    // Displays all friends data
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });
  
    // Accept data from new surveys
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var bestFriend = matchFriend(newFriend, friendsArray);
        res.json(bestFriend);
        friendsArray.push(newFriend);
    });

    // Matching
// =============================================================

    var matchFriend = function(newFriend, friendsArray) {

        //Reset the total differences before processing a new friend
        var totalDifferences = [];
        var smallestDifference = 10000;
        var bestMatch = {};
    
        // Loop through the existing friends
        for (var i = 0; i < friendsArray.length; i++) {
    
            var userDifference = 0;

            console.log("----------\nCalculating difference with friend #", (i + 1));
        
            // For each existing friend, calculate the score difference with newFriend by looping through the 10 scores
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                userDifference += Math.abs(friendsArray[i].scores[j] - newFriend.scores[j]);
                console.log("After question #", (j + 1), "-> new score difference:", userDifference);
            }
            console.log("Total difference:", userDifference);
        
            if (userDifference < smallestDifference) {
                smallestDifference = userDifference;
                bestMatch = friendsArray[i];
            }
    
        }
  
        // Return the friend with the lowest difference
        return bestMatch;
  
    }

}
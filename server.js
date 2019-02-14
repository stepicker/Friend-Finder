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


// Data
// =============================================================
var friendsArray = [
  {
    name:"Quincy Iheme",
    photo:"https://d1qb2nb5cznatu.cloudfront.net/users/546966-large?1495316083",
    scores:[
        3,
        1,
        2,
        4,
        5,
        3,
        1,
        4,
        2,
        2
      ]
  },
  {
    name:"Doc Brown",
    photo:"https://cdna.artstation.com/p/assets/images/images/008/865/742/large/borislav-mitkov-docbrowntest02.jpg?1515768870",
    scores:[
        5,
        3,
        5,
        1,
        4,
        2,
        2,
        1,
        3,
        1
      ]
  },
  {
    name:"Indiana Jones",
    photo:"https://ewedit.files.wordpress.com/2016/02/indiana-jones-and-the-last-crusade.jpg",
    scores:[
        1,
        2,
        5,
        5,
        5,
        5,
        4,
        4,
        4,
        3
      ]
  }
];

// Routes
// =============================================================

// Catch-all Route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Survey Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// Displays all friends data
app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
});

// Accept data from new surveys
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  var bestFriend = matchFriend(newFriend);
  res.json(bestFriend);
  friendsArray.push(newFriend);
});

// Matching
// =============================================================

var matchFriend = function(newFriend) {

  //Reset the total differences before processing a new friend
  var totalDifferences = [];
  var userDifference = 0;

  // Loop through the existing friends
  for (var i = 0; i < friendsArray.length; i++) {
    
    // For each existing friend, calculate the score difference with newFriend by looping through the 10 scores
    for (var j = 0; j < friendsArray[i].scores.length; j++) {
      userDifference += Math.abs(friendsArray[i].scores[j] - newFriend[0].scores[j]);
      console.log("Loop # ", i, " - Difference: ", userDifference);
    }
    console.log("Out of loop difference: ", userDifference);
    // Now that the difference between the 10 scores has been added up, push it into the totalDifferences array
    totalDifferences.push(userDifference);

    console.log("Array after push: ", totalDifferences);

  }

  // Find the lowest score difference and corresponding user
  var lowestDifference = Math.min(...totalDifferences);
  var lowestDifferenceFriend = friendsArray.indexOf(lowestDifference);

  // Return the friend with the lowest difference
  return friendsArray[lowestDifferenceFriend];

}

// Server
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

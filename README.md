# Friend-Finder

First Node.js project deployed to Heroku at the Penn Coding Bootcamp.


## How it works

- You are asked to fill out a survey, with 10 questions that define your personality.

- Your answers are compared with the corresponding answers by all other users.

- The app returns the name and photo of your best match!


## Under the hood

The best match is the person with the lowest difference between your answers and theirs:

> + First, the app calculates the absolute value of the difference - question by question - between your answers and those by each existing user
> + Then, those 10 absolute values are added together for each user, thus returning a score that defines the compatibility between yourself and each of them
> + Finally, the user with the lowest score is chosen as your best match




## Ready to try it?

Head to https://friend-picker.herokuapp.com/

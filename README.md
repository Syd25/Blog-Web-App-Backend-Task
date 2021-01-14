# Blog-Web-App-Backend-Task
Blog web application backend created using node.js,mongodb and express.js

# Introduction

I have created the backend for the blog web application as described in the task.

# Routes

Basically,I have created 3 files for routes:

#index.js

/ :Ensure the guest is logged in and direct to main screen.

/dashboard: Route for displaying all the stories in the dashboard.

#stories.js

/add: Route for showing add page

/ (GET):Showing all stories

/ (Post):Process add form

/:id:showing single story based on ID

/edit/:id:Edit the story with Id

/:id(Put):Update story(Redirect to Dashboard)

/:id(Delete):Delete story based on user id(Redirect to Dashboard)

/user/:userId(get):Displaying user stories based on Id


#user.js

/signup:Route for registration
Success message:User Created

/login:Used for user login


#db

Folder which contains db.js for mongoose database connection.It also contains config.env file for Mongo Api

#middlewares

It contains 2 files:

#header.js

#check-auth.js:
Uses JWR where the server generates a token that certifies the user identity, and sends it to the client

#models

It contains Story.js which contains the StorySchema and User.js which contains the UserSchema

#app.js

1.Basic app.js file for the program where the server is running on port 3000.

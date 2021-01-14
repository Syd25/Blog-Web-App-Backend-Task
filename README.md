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

/add: Route for showing add page.Shows add page of stories which can be an HBS file.eg Stories/add.hbs

/ (GET):Showing all stories.Shows index page of stories which can be an HBS file.eg Stories/index.hbs

/ (Post):Process add form.Shows dashboard file for displaying dashboard. eg.dashboard.hbs

/:id:showing single story based on ID.Shows show page of stories which can be an HBS file.eg Stories/show.hbs

/edit/:id:Edit the story with Id.Shows edit page of stories which can be an HBS file.eg Stories/edit.hbs(Redirect to dashboard)

/:id(Put):Update story(Redirect to Dashboard).If story not found,redirect to error 404 page.If story user not found,redirect to story page.

/:id(Delete):Delete story based on user id(Redirect to Dashboard).If story not found,redirect to error 404 page.If story user not found,redirect to story page.

/user/:userId(get):Displaying user stories based on Id.Shows index page of stories which can be an HBS file.eg Stories/index.hbs


#user.js

/signup:Route for registration
Success message:User Created

/login:Used for user login


# db

Folder which contains db.js for mongoose database connection.It also contains config.env file for Mongo Api

# middlewares

It contains 2 files:

#header.js

#check-auth.js:
Uses JWT where the server generates a token that certifies the user identity, and sends it to the client

# models

It contains Story.js which contains the StorySchema and User.js which contains the UserSchema

# app.js

Basic app.js file for the program where the server is running on port 3000.

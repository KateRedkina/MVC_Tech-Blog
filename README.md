# MVC_Tech-Blog

## Description

It is a CMS-style blog site created using the MVC paradigm. The project uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Users have the ability to create, edit, and delete both posts and comments when logged in to the site. Nonmembers have the ability to only view posts and comments and are prompted to log in if they would like to leave a comment or post.  

**Watch [video](https://drive.google.com/file/d/1lFYF7FVf9r5gFft7Mqq8__fZb42FTOO0/view) to see demonstration:**


## Installation

The project can be run locally using the following steps:
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source db/schema.sql`. Log out of MySQL with command `\q`.
* Seed database with command `npm run seed`.
* Start server with command `npm start`.
* Go to `http://localhost:3001`.

## Usage

* Sign up by creating a unique username and strong password. (Passwords must contain one uppercase letter, one lowercase letter, a digit, and a special character.) After confirming your password and clicking `submit`, you will be logged in automatically after account creation. Remember your log in credentials for future visits!
* Create a new post from *anywhere* on the site by clicking `DASH` in the nav bar. Enter a title and post body and click `POST`. The new post is now viewable on the 'main feed' and 'dash' view.
* The homepage ('main feed') shows all blog post previews by all users and can be accessed by clicking the logo in the nav or `HOME`. This view is public and can also be accessed when logged out. 
* The `DASH` shows blog post previews written by the user who is currently logged in. 
* Post previews from the homepage and dash feeds are clickable and take you to a single page view of that specific post. Here you can read comments, write comments, and/or update the post *if* you are the author.
* Log out of the current session by clicking `LOG OUT` in the nav bar.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Links
* Git-Hub Repository: 
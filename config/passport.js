var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//passport local is an extention of the passport npm package that allow user validation to be an email value

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },

  function( email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      //using sequelize specific query to search the database for a specific condition
      where: {
        email: email
      }
    }).then(function(dbUser) {
      console.log(dbUser , "here is the dbUser")
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Are you sure you have an account?"
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }

      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
  
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, done) {
  done(null, user.id);
    console.log(user.id)

});

passport.deserializeUser(function(obj, done) {
  // dbUser.findById(id, (err, dbUser)=>{
    done(null, obj)
  })


// Exporting our configured passport
module.exports = passport;

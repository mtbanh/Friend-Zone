var express = require('express')
var db = require('./models')
const routes = require("./routes");
var PORT = process.env.PORT || 3001;
var session = require("express-session");
const passport = require("passport")
// var initializePassport = require("./config/passport");
const flash = require("express-flash");

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    })
})
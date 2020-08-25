var express = require('express')
var db = require('./models')
const routes = require("./routes");
var PORT = process.env.PORT || 3001;
var session = require("express-session");
var passport = require("./config/passport");

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
  

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    })
})
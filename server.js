var express = require('express')
var db = require('./models')
const routes = require("./routes");
var PORT = process.env.PORT || 3001;
var session = require("express-session");
const passport = require("passport")
// var initializePassport = require("./config/passport");
const flash = require("express-flash");
// var passport = require("./config/passport");
// var profileSeed = require("./seeders")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
const profileSeed = [{
  firstName: "Marc ",
  lastName: "Berman",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Scale Miniature Building",
  files: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  friends_list: []
    
  },
{
  firstName: "Mai ",
  lastName: "Banh",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Scale Miniature Building",
  files: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  friends_list: []
  },
{
  firstName: "Jane ",
  lastName: "Doe",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Scale Miniature Building",
  files: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  friends_list: []
  },
{
  firstName: "Abbott ",
  lastName: "Doe",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Scale Miniature Building",
  files: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  friends_list: []
  },
{
  firstName: "Ben ",
  lastName: "Berman",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Scale Miniature Building",
  files: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  friends_list: []
    }
]

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/api/profile.js"))

app.use(flash())


app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
  db.Profile.bulkCreate(profileSeed);
  app.listen(PORT, function () {
    console.log("Server listening on localhost:" + PORT)
  });
});
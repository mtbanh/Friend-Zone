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
    name: "Marc Berman",
    gender: "male",
    age: 37,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Cecilia Curry",
    gender: "female",
    age: 25,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Frank Bigelow",
    gender: "male",
    age: 52,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD05-Frank_Bigelow.jpg"
  },
  {
    name: "Tasha Horvath",
    gender: "female",
    age: 45,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Autumn Burke",
    gender: "female",
    age: 27,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad62_burke2.jpg"
  },
  {
    name: "Ian Calderon",
    gender: "male",
    age: 22,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD57.jpg"
  },
  {
    name: "Cristina Garcia",
    gender: "female",
    age: 27,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Sabrina Cervantes",
    gender: "female",
    age: 29,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad60_cervantes_roster150_20161205.jpg"
  },
  {
    name: "Ed Chau",
    gender: "male",
    age: 51,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD49-Chau.jpg"
  },
  {
    name: "Laura Friedman",
    gender: "female",
    age: 25,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad43_friedman.jpg"
  },
  {
    name: "Jesse Gabriel",
    gender: "male",
    age: 39,
    friends_list: [],
    hobby: "Scale Miniature Building",
    bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
    img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/jgabriel.jpg"
  }
]

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
    db.Profile.bulkCreate(profileSeed);
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    });
});
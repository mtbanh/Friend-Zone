var express = require('express')
var db = require('./models')
const routes = require("./routes");
var PORT = process.env.PORT || 3001;
// console.log(`the process.env.port is:`, process.env.PORT)
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

// app.get("/", (req,res)=>{
//   res.sendFile(path.join(__dirname, 'build', "index.html"))
// })

const profileSeed = [
  {

  firstName: "Laura ",
  lastName: "Friedman",
  age: 32,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Running",
  files: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad60_cervantes_roster150_20161205.jpg",
  friends_list: ""
},
{
  firstName: "Ian ",
  lastName: "Calderon",
  age: 25,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Running",
  files: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD57.jpg",
  friends_list: ""
},
{
  firstName: "John ",
  lastName: "Calderelli",
  age: 33,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Running",
  files: "https://i1.wp.com/www.runsociety.com/wp-content/uploads/2015/01/Runners-High-Explained-How-High-Can-You-Get-thumb.jpg?fit=1280%2C720&ssl=1",
  friends_list: ""
},
{
  firstName: "Ben ",
  lastName: "Berman",
  age: 37,
  bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
  hobby: "Running",
  files: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/jgabriel.jpg",
  friends_list: ""
}

]

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/api/profile.js"))

app.use(flash())


app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
  db.Profile.bulkCreate(profileSeed);
  app.listen(PORT, function () {
    console.log("Server listening on localhost:" + PORT)
  });
});
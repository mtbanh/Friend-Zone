const router = require("express").Router();
// const login = require("../../controllers/userController");
// const isAuthenticated = require("../../config/middleware/isAuthenticated")
const passport = require("../../config/passport");
// api route api/login

// initializePassport(passport, email => db.Users.find(user =>user.email === email))

router.route("/")
    .post(
        passport.authenticate("local", {
            // successRedirect: "/profile",
            // failureRedirect:"/login",
            // failureFlash: true
        }), (req, res) => {
            res.json(req.user)
        }
        
    )
  
   

module.exports = router
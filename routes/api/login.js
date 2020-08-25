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
    // .get(
    //     passport.authenticate("local", (err, user, info)=>{
    //         if(err) {return next(err)}
    //         if(!user) {return res.redirect("/login")}
    //         req.logIn(user, err=>{
    //             if(err) {return next(err)}
    //             return res.redirect("/users/" + user.username)
    //         })
    //     }) 
    // )


// router.route("/user_data")
//         .get(
//             passport.authenticate("local"),
//             ((req,res)=>{
//                 if(!req.user){
//                     res.json({})
//                     console.log("Not a user")
//                 } else {
//                     res.json({
//                         id: req.user.id
//                     })
//                 }
//             })
//         )

   

module.exports = router
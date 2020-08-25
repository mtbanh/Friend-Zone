const router = require("express").Router();
// const login = require("../../controllers/userController");
const passport = require("../../config/passport")

// api route api/login
router.route("/")
    .post(
        passport.authenticate("local"),
        ((req, res) => {
            res.json(req.user)
        })
    )

router.route("/user_data")
        .get(
            passport.authenticate("local"),
            ((req,res)=>{
                if(!req.user){
                    res.json({})
                    console.log("Not a user")
                } else {
                    res.json({
                        id: req.user.id
                    })
                }
            })
        )

   

module.exports = router
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

    // .get("/user_data", (req, res)=>{
    //     res.json({
    //         email: req.user.email,
    //         id: req.user.id
    //     })
    // })

module.exports = router
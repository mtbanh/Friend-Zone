const router = require("express").Router();
const login = require("../../controllers/userController");
const passport = require ("../../config/passport")

// api route api/login
router.route("/")
    .post(
        passport.authenticate("local"),
        login.findUser
        );

module.exports = router
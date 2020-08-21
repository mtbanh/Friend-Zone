const router = require("express").Router();
const login = require("../../controllers/registerController");
const passport = require ("../../config/passport")

// api route api/register
router.route("/")

    .post(
        passport.authenticate("local"),
        login.findUser
        );

module.exports = router
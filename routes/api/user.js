const router = require("express").Router();
const passport = require('../../config/passport')
const user = require("../../controllers/userController");

// api route api/user
router.route("/")
    .post(user.createUser)
    .get(
        passport.authenticate("local"),
        user.findUser
    );

module.exports = router
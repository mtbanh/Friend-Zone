const router = require("express").Router();
const register = require("../../controllers/registerController");

// api route api/register
router.route("/")
    .post(register.createUser);

module.exports = router
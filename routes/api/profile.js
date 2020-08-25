const router = require("express").Router();
const profile = require("../../controllers/profileController");

router.route("/")
    .post( profile.createProfile)


   

module.exports = router
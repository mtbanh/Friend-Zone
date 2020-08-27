const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// const profile = require("../../models");
// const db = require("../../models");

// Matches with "/api/chat"
router
  .route("/")
  .get(profileController.findAll)
  .post(profileController.createProfile);

router
  .route("/:id")
  .get(profileController.getById)
  .put(profileController.profileUpdate)

module.exports = router;

// {friends_list: req.body.id




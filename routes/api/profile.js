const router = require("express").Router();
const profileController = require("../../controllers/profileController");
// Matches with "/api/chat"
router
  .route("/")
  // .get(profileController.findAll)
  .post(profileController.createProfile);

router
  // .route("/:id")
  // .get(profileController.getById)
module.exports = router;

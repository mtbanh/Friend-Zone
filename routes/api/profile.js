const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const passport =require("../../config/passport")
// Matches with "/api/chat"
router
  .route("/")
  .get(passport.authenticate("local"), profileController.findAll)
  .post(passport.authenticate("local"),profileController.create);

router
  .route("/:id")
  .get(passport.authenticate("local"),profileController.getById)
module.exports = router;
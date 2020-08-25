const router = require("express").Router();
const chatController = require("../../controllers/chatController");
// Matches with "/api/chat"
router
  .route("/")
  .get(chatController.findAll)
  .post(chatController.create);

router
  .route("/:id")
  .get(chatController.getById)
module.exports = router;

const router = require("express").Router();
const chatTransactionController = require("../../controllers/chatTransactionController");
// Matches with "/api/chat-transaction"
router
  .route("/")
  .get(chatTransactionController.findAll)
  .post(chatTransactionController.create);

router
  .route("/:chatId")
  .get(chatTransactionController.findById)
module.exports = router;

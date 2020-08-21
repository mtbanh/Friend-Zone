const router = require("express").Router();
const chatTransactionController = require("../../controllers/chatTransactionController");

router
  .route("/")
  .get(chatTransactionController.findAll)
  .post(chatTransactionController.create);

router
  .route("/:chatId")
  .get(chatTransactionController.findById);

router 
  .route("/")
module.exports = router;

const router = require("express").Router();
const chatRoutes = require("./chat");
const transactionRoutes = require("./transaction");
// Post routes
router.use("/chat", chatRoutes);
router.use("/chat-transaction", transactionRoutes);

module.exports = router;
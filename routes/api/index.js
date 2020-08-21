const router = require("express").Router();
const chatRoutes = require("./chat");
const transactionRoutes = require("./transaction");
const userRoutes = require("./user")
// Post routes
router.use("/user", userRoutes)
router.use("/chat", chatRoutes);
router.use("/chat-transaction", transactionRoutes);
// router.use("/signup", )

module.exports = router;

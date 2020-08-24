const router = require("express").Router();
const chatRoutes = require("./chat");
const transactionRoutes = require("./transaction");
const registerRoutes = require("./register")
const loginRoutes = require("./login")
// Post routes
router.use("/register", registerRoutes)
router.use("/login", loginRoutes)
router.use("/chat", chatRoutes);
router.use("/chat-transaction", transactionRoutes);
// router.use("/signup", )

module.exports = router;

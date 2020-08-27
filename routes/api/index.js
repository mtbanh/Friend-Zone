const router = require("express").Router();
const chatRoutes = require("./chat");
const transactionRoutes = require("./transaction");
const registerRoutes = require("./register")
const loginRoutes = require("./login")
const profileRoutes = require("./profile")
const isAuthenticated = require("../../config/middleware/isAuthenticated")
const passport = require("../../config/passport")
// Post routes
router.use("/register", registerRoutes)
router.use("/login", loginRoutes)

// router.use("/chat", chatRoutes);
// router.use("/chat-transaction", transactionRoutes);
// router.use("/profile", profileRoutes);

router.use("/chat", isAuthenticated, chatRoutes);
router.use("/chat-transaction", isAuthenticated, transactionRoutes);
router.use("/profile", isAuthenticated, profileRoutes);

// router.use("/signup", )

module.exports = router;

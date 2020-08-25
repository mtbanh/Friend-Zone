const router = require("express").Router();
const chatRoutes = require("./chat");
const transactionRoutes = require("./transaction");
const registerRoutes = require("./register")
const loginRoutes = require("./login")
const profileRoutes = require("./profile")
// Post routes
router.use("/register", registerRoutes)
router.use("/login", loginRoutes)
router.use("/chat", chatRoutes);
router.use("/chat-transaction", transactionRoutes);
<<<<<<< HEAD
router.use("/profile",profileRoutes);
=======
router.use("/profile", profileRoutes);
>>>>>>> 51ef9d710e19053c5835f5952b4d5bf087cebf98
// router.use("/signup", )

module.exports = router;

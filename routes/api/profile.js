const router = require("express").Router();
<<<<<<< HEAD
const profile = require("../../controllers/profileController");

router.route("/")
    .post( profile.createProfile)


   

module.exports = router
=======
const profileController = require("../../controllers/profileController");
// Matches with "/api/chat"
router
  .route("/")
  .get(profileController.findAll)
  .post(profileController.create);

router
  .route("/:id")
  .get(profileController.getById)
module.exports = router;
>>>>>>> 51ef9d710e19053c5835f5952b4d5bf087cebf98

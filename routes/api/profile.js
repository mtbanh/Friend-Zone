const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// const profile = require("../../models");
// const db = require("../../models");

// Matches with "/api/chat"
router
  .route("/")
  .get(profileController.findAll)
  .post(profileController.createProfile);

router
  .route("/:id")
  .get(profileController.getById)
  .put(profileController.profileUpdate)

// router.get("/", function(req, res){
//   profile.find()
//   .then(function(records){
//   res.json(records)
//   })
// })
// router.put("/api/profile", function(req, res){
//   console.log("req" + req)
//   var user = req.params.id
//   console.log("req.body id: " + req.body.id)
//   console.log("user" + user)
//   db.Profile.update({ friends_list: req.body.id },{where: {
//     id: user
//   }
// })
//   .then(function(dbData){
//     console.log(dbData)
//     res.json(dbData)
//   })
//   .catch(err => console.log ("error finding"))
// })
module.exports = router;

// {friends_list: req.body.id

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


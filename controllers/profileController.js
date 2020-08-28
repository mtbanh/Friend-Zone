
const db = require("../models");
const profile = require("../models/profile");


// module.exports = {
//     createProfile: (req,res) => {
//         console.log(req.body);
//         db.Profile.create(req.body)
//             .then(() => {
//                 console.log(`Profile created`)
//                 dbModel => res.json(dbModel)
//             })
//             .catch(err => {
//                 res.status(422).json(err)
//                 console.log(`Error profile user`)
//             })
//     } 
//     }
// const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      console.log(req.query)
        db.Profile.findAll(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      createProfile: function(req, res) {
          console.log(req.body)
        db.Profile.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getById: function(req, res) {
        db.Profile.findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      profileUpdate: function(req, res) {
        console.log(req.body)
        // const friendId = req.body.friend
        console.log(req.user)
        console.log(`the friend id is: ${req.body}`)
          db.Profile
          .update({friends_list: friendId}, {where: {id: req.user.id}})
          
          // .find({
          //   where: {id: req.user}
          // })
          // .then((profile) =>{
          //   profile.friends_list.push(friendId)
          //   profile.update({
          //     friends_list: profile.friends_list
          //   }, {where: {id: req.user}})
          // })
          // }
          //send the userID and update the col friends_list with the friendID
          // .findOneAndUpdate({id:req.user}, req.body)
          .then(dbModel=> {
            res.json(dbModel)
            console.log(dbModel)
          })
          .catch(err => res.status(422).json(err))
      }
    //   getById: function(req, res) {
    //     db.Profile.findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
    }


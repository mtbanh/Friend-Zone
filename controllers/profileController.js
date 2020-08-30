
const db = require("../models");
const profile = require("../models/profile");
const { Sequelize } = require("../models");


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
          .then(dbModel => {
            console.log("Find all",dbModel)
            res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
      createProfile: function(req, res) {
          console.log(req.body)
        db.Profile.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getById: function(req, res) {
        db.Profile.findOne({where: {id : req.params.id}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      profileUpdate: function(req, res) {
        console.log(req.body)
        const friendID = req.body.id 
        console.log(`friendID:`, friendID)
        // const friendId = req.body.friend
        console.log(req.user)
        console.log(`the friend id is: ${req.body}`)
          db.Profile
          .update({friends_list: req.body}, {where: {id: req.params.id}})
          .then(result =>{
            res.json(result)
          })
          
          // .findAll({
          //   where: {id: req.user}
          // })
          // .then((profile)=>{
          //   profile.friends_list.push(friendID)
          //   profile.update({
          //     friends_list: profile.friends_list
          //   },{
          //     where:{
          //       id: req.user
          //     }
          //   })
          //   .then(profile =>res.json(profile))
          // })
          .catch(err => res.status(422).json(err))
      }
    //   getById: function(req, res) {
    //     db.Profile.findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
    }


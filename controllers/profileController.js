<<<<<<< HEAD
const db = require("../models")

module.exports = {
    createProfile: (req,res) => {
        console.log(req.body);
        db.Profile.create(req.body)
            .then(() => {
                console.log(`Profile created`)
            })
            .catch(err => {
                res.status(422).json(err)
                console.log(`Error profile user`)
            })
    } 
    }
=======
const db = require("../models");
module.exports = {
    findAll: function(req, res) {
        db.Profile.findAll(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Profile.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getById: function(req, res) {
        db.Profile.findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}
>>>>>>> 51ef9d710e19053c5835f5952b4d5bf087cebf98

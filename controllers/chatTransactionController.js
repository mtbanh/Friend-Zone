const db = require("../models");
module.exports = {
    findAll: function(req, res) {
        db.ChatTransaction.findAll()
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.ChatTransaction.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res)  {
        db.ChatTransaction.findAll({where : {ChatId : req.params.chatId}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}
const db = require("../models");
const passport = require("passport");

module.exports = {
    createUser: (req, res) => {
        db.User.create(req.body)
            .then(() => {
                console.log(`User created`)
                // res.redirect(307, "/login")
            })
            .catch(err => {
                res.status(422).json(err)
                console.log(`Error creating user`)
            })
    },

    findUser: (req, res) => {
        passport.authenticate("local")
            .then(() => next())
            .catch(err => {
                res.status(422).json(err)
                console.log(`Error finding user`)
            })
    }
}
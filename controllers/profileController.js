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
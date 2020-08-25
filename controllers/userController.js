const db = require("../models");
// const bcrypt = require("bcryptjs");

module.exports = {
    createUser: (req, res) => {
        console.log(req.body);
            db.User.create(req.body)
                .then(() => {
                    console.log(`User created`)
                    // res.redirect(307, "/Login")
                })
                .catch(err => {
                    res.status(422).json(err)
                    console.log(`Error creating user`)
                })
        }

    // findUser: (req, res) => {
    //     console.log(req.user)
        // db.User.
        //     .then(() => next())
        //     .catch(err => {
        //         res.status(422).json(err)
        //         console.log(`Error finding user`)
        //     })
    
}

    // try {
    //     const hashedPassword = bcrypt.hash(req.body.password, 10);
    //     db.User.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.hashedPassword
    //     })
    //         .then((userData) => {
    //             res.send({ user: userData.id, message: "Welcome" })
    //             console.log(`User created`)
    //             // res.redirect(307, "/login")
    //         })
    // }
    // catch (err)  {
    //     res.status(422).json(err)
    //     console.log(`Error creating user`)
    // }

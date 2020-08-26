const db = require("../models");
// const bcrypt = require("bcryptjs");

module.exports = {
    createUser: (req, res) => {
        console.log(req.body);
            db.User.create(req.body)
                .then(() => {
                    console.log(`User added to db`)
                    // res.redirect(303, "/login")
                })
                .catch(err => {
                    res.status(422).json(err)
                    console.log(`Error creating user`)
                    
                })
        }

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

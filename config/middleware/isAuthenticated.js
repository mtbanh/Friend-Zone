
module.exports = function (req, res, next) {
  console.log(`isauthenticated ${req.user}`)
  return req.user === null ? next(false) : next()
  // if (req) {
  //   // console.log(req.user)
  //   // console.log(req.session.passport.user)
  //   return next();
  // }

  // // If the user isn't logged in, redirect them to the login page
  // return res.redirect("/login");
};

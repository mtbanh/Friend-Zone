
module.exports = function (req, res, next) {
  if (req.user) {
    // console.log(req.user)
    // console.log(req.session.passport.user)
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/login");
};

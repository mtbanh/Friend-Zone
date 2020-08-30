
module.exports = function (req, res, next) {
  console.log(`isauthenticated ${req.user}`)
  return req.user === null ? next(false) : next()

};

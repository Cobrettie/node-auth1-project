// check if session exists && user exists
module.exports = (req, res, next) => {
  // console.log('req', req)
  // req.user rendering false for some reason
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(403).json({
      errorMessage: "You shall not pass!"
    })
  }
}
// check if session exists && user exists
module.exports = (req, res, next) => {
  if (req.session) {
    next();
  } else {
    res.status(403).json({
      errorMessage: "You shall not pass!"
    })
  }
}
// check if session exists && user exists
function restrict() {
  return async (req, res, next) => {
  console.log(req.session)
    try {
      if (req.session && req.session.user) {
        next();
      }
    } catch (err) {
      res.status(401).json({message: 'server error'});
    }
  }
}

module.exports = restrict;
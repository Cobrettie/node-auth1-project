const router = require("express").Router();
const users = require('./users-model.js');

function logError(err) {
  console.log("Error: ", err);
}

router.get('/', async (req, res) => {
  try {
    const allUsers = await users.getAllUsers();
    res.status(200).json(allUsers)
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: "Server Error"
    })
  }
})

module.exports = router;
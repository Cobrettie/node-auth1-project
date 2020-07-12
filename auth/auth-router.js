const router = require("express").Router();
const users = require("../users/users-model");
const bcrypt = require("bcrypt");

function logError(err) {
  console.log("Error: ", err);
}

router.post('/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    const savedUser = await users.register(user);
    res.status(201).json(savedUser);
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: "Server error, possible duplicate credentials"
    })
  }
})

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await users.findBy({username}).first();
    console.log('user', user)
    console.log('req.session', req.session);
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      console.log('req.session.user', req.session.user);
      res.status(200).json({
        message: `Welcome ${username}, you are now logged in`
      })
    } else {
      res.status(404).json({
        errorMessage: "You shall not pass!"
      })
    }
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: "Server error"
    })
  }
})

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error logging out')
      } else {
        res.send('logout successful')
      }
    })
  } else {
    res.end();
  }
})

module.exports = router;
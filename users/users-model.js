const db = require('../database/config');

module.exports = {
  register,
  findBy,
  getAllUsers
}

async function register(user) {
  const enteredUser = await db("users").insert(user);
  return enteredUser;
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter)
}

function getAllUsers() {
  return db("users")
}
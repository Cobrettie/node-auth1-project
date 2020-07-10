const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);

const sessionConfig = {
  name: 'cgsession',
  secret: 'Bexley nights',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,

  store: new knexSessionStore({
    knex: require('./database/config.js'),
    tablename: "usersessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
}

const usersRouter = require("./users/users-router.js");
const authRouter = require("./auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api', usersRouter)
server.use('/api', authRouter)

server.use((err, req, res, next) => {
  console.log("Error: ", err)
  res.status(500).json({
    errorMessage: "Something went wrong"
  })
})

module.exports = server;
const express = require('express');
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use routers

server.get('/', (req, res) => {
  res.status(201).json({
    message: "Server running from project!"
  })
});

module.exports = server;
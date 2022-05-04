// build your server here and require it from index.js

const express = require('express');
// const helmet = require('helmet');
const projectRouter = require('./projects/router.js');
const resourceRouter = require('./resources/router.js');
const taskRouter = require('./tasks/router.js');


const server = express();

// server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({ message: err.message, stack : err.stack })
  })

  module.exports = server 
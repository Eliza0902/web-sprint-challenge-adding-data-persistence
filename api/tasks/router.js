// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model.js')
const router = express.Router()

router.get('/', (req, res, next) =>{
 Task.getTasks()
 .then(tasks => {
     res.json(tasks)
 })
 .catch(next)   
})

router.post('/', (req,res,next) =>{
    Task.postTasks(req.body)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch(next)
})
module.exports = router
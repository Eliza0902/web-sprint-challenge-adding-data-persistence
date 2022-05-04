// build your `/api/projects` router here

const express = require('express');
const Project = require('./model.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
});
router.post('/', (req, res, next) => {
    Project.postProject(req.body)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(next)
})

module.exports = router
// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model.js');
const router = express.Router();

router.get('/', (req, res, next) => {
Resource.getResources()
.then(resources => {
    res.status(200).json(resources)
})
.catch(next)
});

router.post('/', (req, res, next) => {
Resource.postResource(req.body)
.then(newResource => {
    res.status(201).json(newResource);
})
.catch(next)
})

module.exports = router
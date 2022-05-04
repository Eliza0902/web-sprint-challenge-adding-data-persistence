// build your `Project` model here

const db = require('../../data/dbConfig.js');

function fixBoolean(project){
    project.project_completed = !!project.project_completed;
    return project;
}


function getProjects(){
    return db('projects').then(projects => projects.map(fixBoolean))}

function getID(id){
return db('projects')
.where('project_id', id)
.first().then(fixBoolean)
}

async function postProject(project) {
const [id] = await db('projects').insert(project);
return getID(id);
}

module.exports = {
    getID,
    getProjects,
    postProject
}
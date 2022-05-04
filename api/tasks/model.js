// build your `Task` model here
const db = require('../../data/dbConfig.js')

function fixBoolean(task){
    task.task_completed = !!task.task_completed;
    return task;
}
function getTasks(){
    return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id' )
    .select('t.task_id','t.task_description', 't.task_notes', 't.task_completed', 'p.project_description', 'p.project_name')
    .then(tasks => tasks.map(fixBoolean))
}

function getByID(id) {
    return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id' )
    .select('t.task_id','t.task_description', 't.task_notes', 't.task_completed', 'p.project_description', 'p.project_name')
    .where('task_id', id).first().then(fixBoolean)
}
async function postTasks(task){
const [id] = await db('tasks').insert(task);
return getByID(id)
}

module.exports = {
    getTasks,
    postTasks
}
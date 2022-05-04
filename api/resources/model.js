// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function getResources(){
   return db('resources')
}

function getById(id) {
return db('resources')
.where('resource_id', id)
.first()
}

async function postResource(resource){
 let [id] = await db('resources').insert(resource)
    return getById(id)
}

module.exports={
    getResources,
    postResource,
    getById
}
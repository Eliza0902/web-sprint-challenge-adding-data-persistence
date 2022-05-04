exports.up = function(knex){
    return knex.schema
    .createTable(
        'projects', tbl => {
            tbl.increments('project_id');
            tbl.text('project_name', 422)
            .notNullable()
            .unique();
            tbl.text('project_description', 422);
            tbl.boolean('project_completed')
            .defaultTo(false)
            
        })
.createTable(
    'resources', tbl => {
        tbl.increments('resource_id');
        tbl.text('resource_name', 422)
        .notNullable()
        .unique();
        tbl.text('resource_description', 422)
    })
    .createTable(
        'tasks', tbl => {
            tbl.increments('task_id');
            tbl.string(`task_description`)
            .notNullable()
            tbl.string('task_notes')
            tbl.boolean('task_completed')
            .defaultTo(false)
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        }
    )
};
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources');
        
};


exports.up = function(knex) {
    return knex.schema.createTable('order', tbl =>{
        tbl.increments('id')

        tbl.integer('total_cost')
            .unsigned()
            .defaultTo(0)

        tbl.boolean('paid')
            .defaultTo(0)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('order')
};

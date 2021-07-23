
exports.up = function(knex) {
    return knex.schema.createTable('paid', tbl => {
        tbl.increments('id')
        tbl.integer('order_number')
            .unsigned()
            .notNullable()
            .references('order_number')
            .inTable('order')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.boolean('paid')
            .defaultTo(false)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('paid')
};

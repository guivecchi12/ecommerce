
exports.up = function(knex) {
    return knex.schema.createTable('paid', tbl => {
        tbl.increments('id')

        tbl.integer('order')
            .notNullable()
            .references('order_number')
            .inTable('order')
            .onDelete('cascade');
        
        tbl.integer('total_cost')
            .unsigned()
            .notNullable()

        tbl.boolean('paid')
            .defaultTo(0)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('paid')
};

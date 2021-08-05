
exports.up = function(knex) {
    return knex.schema.createTable('inventory', tbl =>{
        tbl.increments('sku')
        tbl.string('name')
            .notNullable()
        tbl.integer('quantity')
            .unsigned()
            .defaultTo(0)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory')
};

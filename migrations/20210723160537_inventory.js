
exports.up = function(knex) {
    return knex.schema.createTable('inventory', tbl =>{
        tbl.increments('sku')
        tbl.string('name')
            .notNullable()
        tbl.integer('quantity')
            .unsigned()
            .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory')
};

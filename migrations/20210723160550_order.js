
exports.up = function(knex) {
    return knex.schema.createTable('order', tbl =>{
        tbl.increments('id')
        
        tbl.integer('order_number')
            .unsigned()
            .notNullable()
        
        tbl.timestamps(true,true)

        tbl.integer('inventory_sku')
            .unsigned()
            .notNullable()
            .references('sku')
            .inTable('inventory')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
        tbl.integer('quantity_ordered')
            .unsigned()
            .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('order')
};

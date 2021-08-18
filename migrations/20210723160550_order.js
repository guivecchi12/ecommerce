
exports.up = function(knex) {
    return knex.schema.createTable('order', tbl =>{
        tbl.increments('id')
        
        tbl.integer('customer')
            .notNullable()
            .references('id')
            .inTable('customer')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
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

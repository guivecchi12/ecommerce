
exports.up = function(knex) {
    return knex.schema.createTable('customer', tbl =>{
        tbl.increments('id')

        tbl.string('name')
            .defaultTo('customer')

        tbl.string('address')
            .defaultTo('no address')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customer')
};

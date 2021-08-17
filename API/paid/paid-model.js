const db = require('../../data/configs')
const table = 'paid';

// List all inventory
function listPaid(){
    return db(table)
        .select('*');
}

// Add new Product
function addPaid(order){
    return db(table)
        .insert(order)
        .returning('*');
}

module.exports = {
    listPaid,
    addPaid
}
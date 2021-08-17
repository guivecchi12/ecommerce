const db = require('../../data/configs')
const table = 'order';

// List all inventory
function listOrders(){
    return db(table)
        .select('*');
}

// Add new Product
function addOrder(order){
    return db(table)
        .insert(order)
        .returning('*');
}

module.exports = {
    listOrders,
    addOrder
}
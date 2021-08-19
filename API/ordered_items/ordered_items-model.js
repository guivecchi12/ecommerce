const db = require('../../data/configs')
const table = 'ordered_item';

// List all inventory
function listOrderedItems(){
    return db(table)
        .select('*');
}

// Add new Product
function addOrderItem(item){
    return db(table)
        .insert(item)
        .returning('*');
}

module.exports = {
    listOrderedItems,
    addOrderItem
}
const db = require('../../data/configs')
const table = 'ordered_item';

// List all inventory
function listOrderedItems(){
    return db(table)
        .select('*');
}

// Add new Item
function addOrderItem(item){
    return db(table)
        .insert(item)
        .returning('*');
}

// Update Item
function updateItem(id, update){
    return db(table)
        .where({id, id}, update(update))
        .select('*')

}

// Delete Item

module.exports = {
    listOrderedItems,
    addOrderItem,
    updateItem
}
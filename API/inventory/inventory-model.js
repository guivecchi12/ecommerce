const db = require('../../data/configs')
const table = 'inventory';

// List all inventory
function listInv(){
    return db(table)
        .select('*')
}

// Find by sku
// Find by name
// Add new Product
// Update Inventory
// Delete Product

module.exports = {
    listInv
}
const db = require('../../data/configs')
const table = 'inventory';

// List all inventory
function listInv(){
    return db(table)
        .select('*');
}

// Find by sku
function findSKU(sku){
    return db(table)
        .where({sku: sku})
        .first()
        .select('*');
}

// Find by name
function findProdByName(name){
    return db(table)
        .where({name: name})
        // .first()
        .select('*');
}

// Add new Product
function addProduct(prod){
    return db(table)
        .insert(prod)
        .returning('*')
}

// Update Inventory
// Delete Product

module.exports = {
    listInv,
    findSKU,
    findProdByName,
    addProduct
}
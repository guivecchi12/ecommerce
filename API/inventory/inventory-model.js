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
        .whereRaw('LOWER(name) LIKE ?', [`%${name}%`])
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
function updateProduct(prod, changes){
    return db(table)
        .where('sku', prod)
        .first()
        .update(changes)
        .returning('*')
}

// Delete Product

module.exports = {
    listInv,
    findSKU,
    findProdByName,
    addProduct,
    updateProduct
}
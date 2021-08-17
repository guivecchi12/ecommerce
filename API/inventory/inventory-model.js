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

// Check for existing name
function findName(name){
    return db(table)
        .where('name', name)
        .first();
}

// Add new Product
function addProduct(prod){
    return db(table)
        .insert(prod)
        .returning('*');
}

// Update Inventory
function updateProduct(prod, changes){
    return db(table)
        .where('sku', prod)
        .first()
        .update(changes)
        .returning('*');
}

// Delete Product
function deleteProduct(prod){
    return db(table)
        .where('sku', prod)
        .del()
        .returning('*')
}

module.exports = {
    listInv,
    findSKU,
    findProdByName,
    findName,
    addProduct,
    updateProduct,
    deleteProduct
}
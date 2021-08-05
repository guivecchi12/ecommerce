const express = require('express')
const router = express.Router()
const invModel = require('./inventory-model')

// List all inventory
router.get('/', async(req, res) => {
    try{
        const inventory = invModel.listInv()
        return res.status(200).json(inventory)
    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }
})

// Find Inventory by name/sku
// Add new Product
// Update Inventory
// Delete Product

module.exports = router

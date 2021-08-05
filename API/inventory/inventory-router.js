const express = require('express')
const router = express.Router()
const invModel = require('./inventory-model')

// List all inventory
router.get('/', async(req, res) => {
    try{
        const inventory = await invModel.listInv()
        console.log(inventory)
        return res.status(200).json(inventory)
    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }
})

// Find Inventory by name/sku
router.get('/:sku', async(req, res) => {
    try{
        const inv = await invModel.findSKU(req.params.sku)
        if(!inv){
            return res.status(400).json({ message: "This product does not exist"})
        }
        return res.status(200).json(inv)
    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }
})

// Add new Product
router.post('/', async(req,res) => {
    try{
        const newProd = req.body;
        if(!newProd.name || newProd.name.trim() === ''){
            return res.status(400).json({
                message: "Product name is required"
            })
        }
        const prodExists = await invModel.findProdByName(newProd.name)
        if(prodExists){
            return res.status(400).json({
                message: 'This product already exists would you like to add stock instead?',
                product: prodExists
            })
        }

        await invModel.addProduct(newProd)
        const response = await invModel.listInv()
        return res.status(201).json(response)

    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }
})

// Update Inventory
// Delete Product

module.exports = router

const express = require('express')
const router = express.Router()
const invModel = require('./inventory-model')

const errorMessage = (res, status, message) =>{
    return res.status(status).json({ message: message })
} 

// List all inventory
router.get('/', async(req, res) => {
    try{
        const inventory = await invModel.listInv()
        console.log(inventory)
        return res.status(200).json(inventory)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Find Inventory by name/sku
router.get('/:search', async(req, res) => {
    try{
        let inv = await invModel.findSKU(req.params.search)
        if(!inv){
            inv = await invModel.findProdByName(req.params.search)
            if(!inv){
                return errorMessage(res, 400, "This product does not exist")
            }
        }
        return res.status(200).json(inv)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Add new Product
router.post('/', async(req,res) => {
    try{

        const newProd = req.body;
        if(!newProd.name || newProd.name.trim() === ''){
            return errorMessage(res, 400, "Product name is required")
        }

        const prodExists = await invModel.findName(newProd.name)
        if(prodExists){
            // return errorMessage(res, 400, 'This product already exists would you like to add stock instead?')    
            return res.status(200).json({message: 'already exists', product: prodExists})
        }

        await invModel.addProduct(newProd)
        const response = await invModel.listInv()
        
        return res.status(201).json(response)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Update Product
router.put('/:sku', async(req,res) => {
    try{
        const sku = req.params.sku
        const body = req.body
        const exist = await invModel.findSKU(sku)

        if(!exist){
            return errorMessage(res, 401, "task not found")
        }
        else if(!body){
            return errorMessage(res, 400, "No changes made")
        }

        await invModel.updateProduct(sku, body)
        const updated = await invModel.findSKU(sku)

        return res.status(200).json(updated)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Delete Product
router.delete('/:sku', async(req, res) => {
    try{
        const sku = req.params.sku
        const removed = await invModel.findSKU(sku)

        console.log(removed);

        if(!removed){
            return errorMessage(res, 401, "Product not found")
        }

        else{
            console.log(sku)
            const r = await invModel.deleteProduct(sku)
            console.log(r)
            return res.status(200).json({
                message: 'Product successfully removed',
                product: removed
            })
        }
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

module.exports = router

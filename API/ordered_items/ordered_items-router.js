const express = require('express')
const router = express.Router()
const orderModel = require('./ordered_items-model');
const errorMessage = require('../errorMessage');

router.get('/', async(req, res) => {
    try{
        const orders = await orderModel.listOrderedItems()
        console.log(orders)
        return res.status(200).json(orders)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Add new Product
router.post('/', async(req,res) => {
    try{

        const newOrder = req.body;
        if(!newOrder.order){
            return errorMessage(res, 400, "Order ID is required")
        }
        if(!newOrder.inventory_sku){
            return errorMessage(res, 400, "Purchasing SKU needed")
        }
        if(!newOrder.quantity_ordered){
            return errorMessage(res, 400, "Quantity needed")
        }


        // const orderExists = await invModel.findName(newOrder.name)
        // if(prodExists){
        //     // return errorMessage(res, 400, 'This product already exists would you like to add stock instead?')    
        //     return res.status(200).json({message: 'already exists', product: prodExists})
        // }

        await orderModel.addOrderItem(newOrder)
        const response = await orderModel.listOrderedItems()
        
        return res.status(201).json(response)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

module.exports = router
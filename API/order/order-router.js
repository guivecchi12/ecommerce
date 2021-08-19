const express = require('express')
const router = express.Router()
const orderModel = require('./order-model.js');

const errorMessage = (res, status, message) =>{
    return res.status(status).json({ message: message })
}

router.get('/', async(req, res) => {
    try{
        const orders = await orderModel.listOrders()
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

        await orderModel.addOrder(newOrder)
        const response = await orderModel.listOrders()
        
        return res.status(201).json(response)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

module.exports = router
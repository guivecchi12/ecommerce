const express = require('express')
const router = express.Router()
const orderModel = require('./order-model.js');
const errorMessage = require('../errorMessage');

//Find all Orders
router.get('/', async(req, res) => {
    try{
        const orders = await orderModel.listOrders()
        return res.status(200).json(orders)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Find by order ID
router.get('/find/:id', async(req, res) => {
    try{
        const order = await orderModel.findOrder(req.params.id)

        if(!order){
            return errorMessage(res, 400, "Order not found")
        }

        return res.status(200).json(order)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Find Orders Paid for
router.get('/paid', async(req,res) => {
    try{
        const paidOrders = await orderModel.listPaid()
        return res.status(200).json(paidOrders)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Find Orders not Paid for
router.get('/notPaid', async(req,res) => {
    try{
        const unpaidOrders = await orderModel.listNotPaid()
        return res.status(200).json(unpaidOrders)

    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Add new Order
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

// Update Order
router.put('/:id', async(req,res) => {
    try{
        const changeOrder = req.body;
        const orderId = req.params.id;
        const order = await orderModel.findOrder(orderId)

        if(!order){
            return res.status(401).json({message: 'Order not found'})
        }

        await orderModel.update(orderId, changeOrder)
        const updated = await orderModel.findOrder(orderId)
        return res.status(200).json(updated)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

// Delete Order
router.delete('/:id', async(req,res) => {
    try{
        const orderId = req.params.id;
        const order = await orderModel.findOrder(orderId)

        if(!order){
            return res.status(401).json({message: 'Order not found'})
        }

        await orderModel.remove(orderId)
        orderList = await orderModel.listOrders()
        return res.status(200).json(orderList)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

module.exports = router
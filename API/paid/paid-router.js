const express = require('express')
const router = express.Router()
const paidModel = require('./paid-model.js');

const errorMessage = (res, status, message) =>{
    return res.status(status).json({ message: message })
}

router.get('/', async(req, res) => {
    try{
        const orders = await paidModel.listPaid()
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

        const newPaid = req.body;
        if(!newPaid.customer){
            return errorMessage(res, 400, "Customer ID is required")
        }
        if(!newPaid.total_cost){
            return errorMessage(res, 400, "Purchasing SKU needed")
        }


        // const orderExists = await invModel.findName(newOrder.name)
        // if(prodExists){
        //     // return errorMessage(res, 400, 'This product already exists would you like to add stock instead?')    
        //     return res.status(200).json({message: 'already exists', product: prodExists})
        // }

        await paidModel.addPaid(newPaid)
        const response = await paidModel.listPaid()
        
        return res.status(201).json(response)
    }
    catch(err){
        return errorMessage(res, 500, err.message)
    }
})

module.exports = router
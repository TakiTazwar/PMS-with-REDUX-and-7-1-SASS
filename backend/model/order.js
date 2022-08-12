const mongoose = require('mongoose');

const orderSchema=new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    medicines: [
        {
            med: 
            {
                name:{
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                category: {
                    type: String,
                    required: true
                },
                company: {
                    type: String,
                    required: true
                },
                license: {
                    type: String,
                    required: true
                },
                country: {
                    type: String,
                    required: true
                },
                imageUrl: {
                    type: String,
                    required: true
                },
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    address: {
        type: String,
        required: true
    },
    payementMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    deliveredBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{collection: 'orders'})

const orderData=mongoose.model('Order',orderSchema);



module.exports = orderData;
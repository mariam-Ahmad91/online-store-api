const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity cannot be less than 1'],
            default: 1
        }
    }]
});

module.exports = mongoose.model('Cart', CartSchema);
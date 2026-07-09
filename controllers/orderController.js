const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.createOrder = async (req, res, next) => {
    try {
        const cart = await Cart.findOne().populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        let totalPrice = 0;
        const orderItems = cart.items.map(item => {
            const price = item.product.price;
            totalPrice += price * item.quantity;
            return {
                product: item.product._id,
                quantity: item.quantity,
                price: price
            };
        });

        const order = await Order.create({
            items: orderItems,
            totalPrice: totalPrice
        });

        cart.items = [];
        await cart.save();

        res.status(201).json(order);
    } catch (error) {
        next(error);
    }
};

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate('items.product');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};
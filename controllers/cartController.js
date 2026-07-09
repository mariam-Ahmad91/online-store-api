const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res, next) => {
    try {
        let cart = await Cart.findOne().populate('items.product');
        if (!cart) {
            cart = await Cart.create({ items: [] });
        }
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

exports.addToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne();
        if (!cart) {
            cart = await Cart.create({ items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity || 1;
        } else {
            cart.items.push({ product: productId, quantity: quantity || 1 });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

exports.updateCartItem = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await Cart.findOne();
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity = quantity;
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        next(error);
    }
};

exports.removeFromCart = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const cart = await Cart.findOne();
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};
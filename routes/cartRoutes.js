const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const Product = require('../models/Product');
const Category = require('../models/Category');

// هذا هو المسار الذي يجلب المنتجات للاختبار
router.get('/products', async (req, res, next) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

router.route('/')
    .get(cartController.getCart)
    .post(cartController.addToCart)
    .put(cartController.updateCartItem);

router.delete('/:productId', cartController.removeFromCart);

module.exports = router;
const { getAllProducts } = require('../models/productModel');

async function getProducts(req, res) {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

module.exports = { getProducts };

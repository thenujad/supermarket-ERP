// controllers/productController.js
const db = require('../config/db');

const getProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const addProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        await db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
        res.json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
        await db.query('UPDATE products SET name=?, price=?, description=? WHERE id=?', [name, price, description, id]);
        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM products WHERE id=?', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };

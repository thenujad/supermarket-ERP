const db = require('../config/db');

async function getAllProducts() {
    const [products] = await db.query('SELECT * FROM products');
    return products;
}

module.exports = { getAllProducts };

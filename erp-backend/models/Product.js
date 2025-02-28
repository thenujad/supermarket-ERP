const db = require('../config/database');

async function getAllProducts() {
    const [products] = await db.query('SELECT * FROM products');
    return products;
}

module.exports = { getAllProducts };

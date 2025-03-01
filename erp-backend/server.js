require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Allow frontend requests
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());  // Add CORS middleware
app.use(express.json());

app.use('/api', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

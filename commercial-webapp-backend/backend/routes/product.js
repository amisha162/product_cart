// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Define your product-related API routes here

module.exports = router;


// routes/products.js
router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Define other routes for cart and purchase
  module.exports = router;


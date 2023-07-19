
const express = require('express');
const Product = require('../models/Product');
const router = express.Router() //mini server -> acts like app



// displaying all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find({}); //finding the products
    res.render('products/index' , {products});
})



module.exports = router;
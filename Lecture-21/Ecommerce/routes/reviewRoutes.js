
const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router() //mini server -> acts like app


router.post('/products/:id/review' , async(req,res)=>{
    let {id} = req.params;
    let {rating , comment} = req.body;
    let product = await Product.findById(id);
    // new review after form submitted
    let review  = new Review({rating , comment})
    product.reviews.push(review);

    await review.save();
    await product.save();
    // res.send('review added')
    res.redirect(`/products/${id}`);
})


module.exports = router;

const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router() //mini server -> acts like app



// displaying all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find({}); //finding the products
    res.render('products/index' , {products});
})


// adding a form for new product
router.get('/products/new' , (req,res)=>{
    res.render('products/new')
})

// actually adding product in the DB
router.post('/products' , async(req,res)=>{
    let {name , price , desc , img} = req.body; //by default undefined
    // console.log(name , price , desc , img);
    await Product.create({name, img, price, desc});
    // res.send('check your console')
    res.redirect('/products');
})

// for showing details of particular product
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('products/show' , {foundProduct})
})

// form for getting editing a product
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit' , {foundProduct})
})

// to actually edit in th DB
router.patch('/products/:id' , async(req,res)=>{
    // let {id} = req.params; //req.params.id
    let {name , price , desc , img} = req.body
    await Product.findByIdAndUpdate(req.params.id , {name , price , desc , img})
    res.redirect('/products');
})

// deleting a product
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let product = await Product.findById(id);

    for(let id of product.reviews){
        await Review.findByIdAndDelete(id);
    }

    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})



module.exports = router;
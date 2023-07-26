
const express = require('express');
const Product = require('../models/Product');
const User = require('../models/User');
const router = express.Router() //mini server -> acts like app
const passport = require('passport');

// form for signup
router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

// actually signing up
router.post('/register' , async(req,res)=>{
    let {email , username , password } = req.body;
    const user = new User({email , username});
    const newUser = await User.register(user , password );
    res.send(newUser);
})

// form for login
router.get('/login' , (req,res)=>{
    res.render('auth/login');
})

// actually logging in
router.post('/login' , passport.authenticate('local', { 
     failureRedirect: '/login' 
    }),
    function(req, res) {
    res.redirect('/products');
})

// logout
router.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });


module.exports = router;
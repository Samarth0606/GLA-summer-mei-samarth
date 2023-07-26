require('dotenv').config()
const express = require('express');
const app = express(); //instance of your application
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User')
const session = require('express-session')


mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})



app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public'))); // static files
// body parser
app.use(express.urlencoded({ extended: true })); //for form data
app.use(methodOverride('_method'))

let configSesion = {
    secret: 'samarth vohra',
    resave: false,
    saveUninitialized: true,
}


app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
})

app.use(session(configSesion));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new LocalStrategy(User.authenticate()));

// seedDB();

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);



const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})